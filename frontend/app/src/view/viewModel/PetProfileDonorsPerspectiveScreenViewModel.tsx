import {RouteProp, useIsFocused, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {listPostService} from '../../data/service/PostService';
import {RootState} from '../../data/store';
import {Pet} from '../../model/Pet';
import {Post} from '../../model/Post';

interface PetProfileDonorsPerspectiveScreenViewModelProps {
  navigation: any;
}

interface RouteParams {
  pet: Pet;
}

const PetProfileDonorsPerspectiveScreenViewModel = ({
  navigation,
}: PetProfileDonorsPerspectiveScreenViewModelProps) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const pet = route.params?.pet;
  const [posts, setPosts] = useState<Post[]>([]);
  const [openedImageName, setOpenedImageName] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const isFocused = useIsFocused();

  const [postModel, setPostModel] = useState<Post>({
    id: 0,
    pet: pet!,
    cameraPicture: undefined,
    paymentvoucher: false,
    picturePost: '',
    postDescription: '',
  });

  useEffect(() => {
    if (isFocused) {
      updatePostList();
    }
  }, [isFocused, postModel]);

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

  const handleImageModalClose = () => {
    setOpenedImageName('');
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

  return {
    pet,
    handlePetReceiptTabPressed,
    handlePetPhotosTabPressed,
    postModel,
    posts,
    handleGalleryItemPress,
    handleImageModalClose,
    openedImageName,
    isModalVisible,
    setModalVisible,
    loading,
  };
};

export default PetProfileDonorsPerspectiveScreenViewModel;
