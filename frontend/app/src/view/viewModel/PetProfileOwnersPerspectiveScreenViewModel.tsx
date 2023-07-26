import {useRef} from 'react';
import {useEffect, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {Post} from '../../model/Post';
import {RouteProp, useIsFocused, useRoute} from '@react-navigation/native';
import {Pet} from 'src/model/Pet';
import {
  createPostService,
  listPostService,
} from '../../data/service/PostService';
import {useSelector} from 'react-redux';
import {RootState} from 'src/data/store';
import {showAlert} from '../../utils/showAlerts';
import {Alert} from 'react-native';

interface PetProfileOwnersPerspectiveScreenViewModelProps {
  navigation: any;
}

interface RouteParams {
  pet: Pet;
}

const PetProfileOwnersPerspectiveScreenViewModel = ({
  navigation,
}: PetProfileOwnersPerspectiveScreenViewModelProps) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const pet = route.params?.pet;
  const isFocused = useIsFocused();

  const cameraRef = useRef<RNCamera | null>(null);
  const [cameraModalOpened, setCameraModalOpened] = useState<boolean>(false);
  const [openedImageName, setOpenedImageName] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [postModel, setPostModel] = useState<Post>({
    id: 0,
    pet: pet!,
    cameraPicture: undefined,
    paymentvoucher: false,
    picturePost: '',
    postDescription: '',
  });
  const [posts, setPosts] = useState<Post[]>([]);

  const setPostDescription = (postDescription: string) => {
    setPostModel({
      ...postModel,
      postDescription: postDescription,
    });
  };

  useEffect(() => {
    if (isFocused) {
      setPostModel({
        ...postModel,
        pet: route.params?.pet,
      });
      updatePostList();
    }
  }, [isFocused, postModel.paymentvoucher, postModel.picturePost]);

  const updatePostList = async () => {
    setLoading(true);
    try {
      const posts = await listPostService(
        token,
        postModel.paymentvoucher,
        pet.id,
      );
      setPosts(posts);
    } catch (error: any) {
      console.log('Erro ao obter a lista de posts:', error.message);
    }
    setLoading(false);
  };

  const handlePetPhotosTabPressed = () => {
    setPostModel({
      ...postModel,
      paymentvoucher: false,
    });
  };

  const handlePetReceiptTabPressed = () => {
    setPostModel({
      ...postModel,
      paymentvoucher: true,
    });
  };

  const handleGalleryItemPress = (imageName: string) => {
    setOpenedImageName(imageName);
  };

  const handleTakePicture = async () => {
    if (cameraRef && cameraRef.current) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
      };

      try {
        const data = await cameraRef.current?.takePictureAsync(options);

        setPostModel({
          ...postModel,
          picturePost: data?.uri.split('/').slice(-1)[0] ?? '',
          cameraPicture: data,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCameraModalClose = (done: boolean) => {
    setCameraModalOpened(!cameraModalOpened);

    if (done == false) {
      setPostModel({
        ...postModel,
        picturePost: '',
        cameraPicture: undefined,
      });
    }
  };

  const handleImageModalClose = () => {
    setOpenedImageName('');
  };

  const handlePublishButtonPress = async () => {
    setLoading(true);
    try {
      await createPostService(token, postModel);
      showAlert('Sucesso', 'Sucesso ao criar o post');

      setPostModel({
        id: 0,
        pet: pet!,
        cameraPicture: undefined,
        paymentvoucher: false,
        picturePost: '',
        postDescription: '',
      });
    } catch (error: any) {
      console.log('Erro ao cadastrar post:', error.message);
      showAlert('Erro ao cadastrar post:', error.message);
    }
    setLoading(false);
  };

  return {
    handlePetPhotosTabPressed,
    handlePetReceiptTabPressed,
    handleTakePicture,
    handleCameraModalClose,
    cameraModalOpened,
    cameraRef,
    postModel,
    setPostDescription,
    handlePublishButtonPress,
    posts,
    handleGalleryItemPress,
    handleImageModalClose,
    openedImageName,
    pet,
    loading,
  };
};
export default PetProfileOwnersPerspectiveScreenViewModel;
