import {useEffect, useState} from 'react';
import {Pet} from '../../model/Pet';
import {petListService, petDeleteService} from '../../data/service/PetService';
import {useSelector} from 'react-redux';
import {RootState} from 'src/data/store';
import {petProfileOwnersPerspective, petRegister} from '../../utils/routes';
import {showAlert, showConfirmAlert} from '../../utils/showAlerts';
import {useIsFocused} from '@react-navigation/native';
interface PetListScreenViewModelProps {
  navigation: any;
}

const PetListScreenViewModel = ({navigation}: PetListScreenViewModelProps) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [petList, setPetList] = useState<Pet[]>([]);
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);

  const handlePetProfileRedirect = async (pet: Pet) => {
    navigation.navigate(petProfileOwnersPerspective, {pet: pet});
  };

  const handleRegisterPet = () => {
    navigation.navigate(petRegister);
  };

  const handleEditButtonPress = async (pet: Pet) => {
    navigation.navigate(petRegister, {pet: pet});
  };

  useEffect(() => {
    if (isFocused) {
      updatePetList();
    }
  }, [isFocused]);

  const updatePetList = async () => {
    setLoading(true);
    try {
      const data = await petListService(token);
      setPetList(data);
    } catch (error: any) {
      console.log('Erro ao obter a lista de pets:', error.message);
      showAlert('Erro ao obter a lista de pets:', error.message);
    }
    setLoading(false);
  };

  const handleDeleteButtonPress = async (pet: Pet) => {
    try {
      showConfirmAlert(
        'Tem certeza?',
        `Você irá deletar o pet ${pet.name} permanentemente`,
        () => {
          setLoading(true);
          petDeleteService(token, pet).then(deletedPet => {
            if (deletedPet != null) {
              showAlert('Sucesso', `Sucesso deletar o pet ${deletedPet.name}`);

              const newPetList = [...petList];
              newPetList.splice(petList.indexOf(deletedPet), 1); // remove o item do índice especificado
              setPetList(newPetList);
            } else {
              showAlert('Erro', 'Pet não encontrado');
            }

            setLoading(false);
          });
        },
      );
    } catch (error: any) {
      console.log('Erro ao deletar o pet:', error.message);
      showAlert('Erro ao deletar o pet:', error.message);
    }
  };

  return {
    petList,
    updatePetList,
    handlePetProfileRedirect,
    handleDeleteButtonPress,
    handleRegisterPet,
    handleEditButtonPress,
    loading,
  };
};
export default PetListScreenViewModel;
