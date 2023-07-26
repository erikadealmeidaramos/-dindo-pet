import {useSelector} from 'react-redux';
import {RootState} from 'src/data/store';
import {mixed, object, string} from 'yup';
import {Pet} from '../../model/Pet';
import {User} from '../../model/User';
import {Breed} from '../../model/Breed';
import {Specie} from '../../model/Specie';
import {
  registerPetService,
  updatePetService,
} from '../../data/service/PetService';
import {useFormik} from 'formik';
import {showAlert} from '../../utils/showAlerts';
import {useEffect, useRef, useState} from 'react';
import {userProfileService} from '../../data/service/UserService';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';
import {uploadsFolderUrl} from '../../utils/constants';
import {specieListService} from '../../data/service/SpecieService';
import {Alert} from 'react-native';

interface PetRegisterScreenViewModelProps {
  navigation: any;
}

interface RouteParams {
  pet: Pet;
}

const PetRegisterScreenViewModel = ({
  navigation,
}: PetRegisterScreenViewModelProps) => {
  const [cameraModalOpened, setCameraModalOpened] = useState<boolean>(false);
  const cameraRef = useRef<RNCamera | null>(null);
  const token = useSelector((state: RootState) => state.auth.token);
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const pet = route.params?.pet;
  const [specieList, setSpecieList] = useState<Specie[]>([]);
  const [breedList, setBreedList] = useState<{value: number; label: string}[]>(
    [],
  );
  const [selectedSpecieOption, setSelectedSpecieOption] = useState('');
  const [selectedBreedOption, setSelectedBreedOption] = useState('');
  const [selectedStatusOption, setSelectedStatusOption] = useState('');
  const [loading, setLoading] = useState(true);

  const [userModel, setUserModel] = useState<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
    cpf: '',
    pix: '',
  });

  const [specieModel, setSpecieModel] = useState<Specie>({
    id: 0,
    description: '',
    breeds: [],
  });

  const [breedModel, setBreedModel] = useState<Breed>({
    id: 0,
    description: '',
    specie: specieModel,
  });

  const [petModel, setPetModel] = useState<Pet>({
    id: 0,
    name: '',
    image: '',
    imagePath: '',
    status: null,
    cash: 0,
    user: userModel,
    breed: breedModel,
    cameraPicture: undefined,
  });

  useEffect(() => {
    specieListService(token).then(dataSpecie => {
      setSpecieList(dataSpecie);

      setBreedList([]);

      if (pet != null && pet != undefined) {
        setPetModel({
          id: pet.id,
          name: pet.name,
          image: pet.image,
          imagePath: `${uploadsFolderUrl}${pet.image}`,
          status: pet.status,
          cash: pet.cash,
          breed: pet.breed,
          user: pet.user,
          cameraPicture: undefined,
        });
        setUserModel(pet.user);
        setBreedModel(pet.breed);
        setSpecieModel(pet.breed.specie);

        const breeds =
          dataSpecie.find(specie => specie.id == pet.breed.specie.id)?.breeds ??
          [];

        handleOptionSelect({value: pet.breed.specie.id, breeds: breeds});

        setSelectedSpecieOption(pet.breed.specie.description);

        setSelectedBreedOption(pet.breed.description);
        setSelectedStatusOption(pet.status ? 'Ativo' : 'Inativo');
        setLoading(false);
      } else {
        userProfileService(token).then(data => {
          setUserModel({
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            cpf: data.cpf,
            pix: data.pix,
          });

          setLoading(false);
        });
      }
    });
  }, []);

  const speciesList = specieList.map(item => {
    return {
      value: item.id,
      label: item.description,
      breeds: item.breeds,
      icon: item.description == 'Cão' ? 'dog' : 'cat',
    };
  });

  const statusList = [
    {label: 'Ativo', value: '1', icon: 'lock-open-variant'},
    {label: 'Inativo', value: '0', icon: 'lock'},
  ];

  const handleOptionSelect = (option: any) => {
    petModel.breed.specie.id = option.value;

    setBreedList(
      option.breeds.map((item: {id: any; description: any}) => {
        return {
          value: item.id,
          label: item.description,
        };
      }),
    );
  };

  const handleOptionSelectBreed = (option: any) => {
    petModel.breed.id = option.value;
  };

  const handleOptionSelectStatus = (option: any) => {
    petModel.status = convertToBoolean(option.value);
    formik.setFieldValue('status', convertToBoolean(option.value));
  };

  const convertToBoolean = (value: any) => {
    if (value === '1') {
      return true;
    }
    return false;
  };

  const validationSchema = object().shape({
    name: string().required('Nome obrigatório'),
    cash: string()
      .test('notZero', 'O valor não pode ser zero', value => {
        if (!value) return true;
        const parsedValue = parseFloat(value.replace(',', '.'));
        return parsedValue !== 0;
      })
      .required('Necessário para o mês é obrigatório'),
    image: string().required('Imagem obrigatória'),
    breed: mixed()
      .test(
        'notEmpty',
        'Raça obrigatória',
        (value: any) => typeof value['id'] === 'number' && value['id'] != 0,
      )
      .required('Raça obrigatória'),
    status: mixed()
      .test(
        'notEmpty',
        'Status obrigatório',
        (value: any) => value == true || value == false,
      )
      .required('Status obrigatório'),
  });

  async function handleSubmit(values: Pet) {
    values.user.id = userModel.id;

    try {
      if (values.id == 0) {
        await registerPetService(token, values);
        showAlert('Sucesso', 'Pet inserido com sucesso');
        navigation.goBack();
      } else {
        await updatePetService(token, values);
        showAlert('Sucesso', 'Pet atualizado com sucesso');
      }
    } catch (error: any) {
      showAlert('Erro ao cadastrar o pet:', error.message);
    }
  }

  const formik = useFormik({
    initialValues: petModel,

    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: handleSubmit,
  });

  async function handleTakePicture() {
    if (cameraRef && cameraRef.current) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
      };

      try {
        const data = await cameraRef.current?.takePictureAsync(options);

        const imageName = data?.uri.split('/').slice(-1)[0] ?? '';

        const base64Image = `data:image/jpeg;base64,${data?.base64}`;

        setPetModel({
          ...petModel,
          image: imageName,
          cameraPicture: data,
          imagePath: data?.base64 ? base64Image : '',
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  const handleCameraModalClose = (done: boolean) => {
    setCameraModalOpened(!cameraModalOpened);

    if (done == false) {
      setPetModel({
        ...petModel,
        image: '',
        cameraPicture: undefined,
        imagePath: '',
      });
    }
  };

  return {
    formik,
    petModel,
    speciesList,
    breedList,
    statusList,
    handleOptionSelect,
    handleOptionSelectBreed,
    handleOptionSelectStatus,
    handleCameraModalClose,
    cameraModalOpened,
    cameraRef,
    handleTakePicture,
    selectedSpecieOption,
    setSelectedSpecieOption,
    selectedBreedOption,
    setSelectedBreedOption,
    selectedStatusOption,
    setSelectedStatusOption,
    loading,
  };
};
export default PetRegisterScreenViewModel;
