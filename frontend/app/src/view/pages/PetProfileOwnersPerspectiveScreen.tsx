import React from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';
import styles from '../styles/PetProfileScreenStyle';
import stylesGlobal from '../styles/GlobalStyle';
import {Tab} from '../components/Tab';
import {useNavigation} from '@react-navigation/native';
import PetProfileOwnersPerspectiveScreenViewModel from '../viewModel/PetProfileOwnersPerspectiveScreenViewModel';
import {PostUploader} from '../components/PostUploader';
import {GalleryItem} from '../components/GalleryItem';
import {Post} from '../../model/Post';
import ImageModal from '../components/ImageModal';
import {HeaderContentProfile} from '../components/HeaderContentProfile';
import {Loading} from '../components/Loading';

const PetProfileOwnersPerspectiveScreen = () => {
  const navigation = useNavigation();

  const viewModelProps = {navigation};
  const viewModel = PetProfileOwnersPerspectiveScreenViewModel(viewModelProps);

  const renderItem = ({item}: {item: Post}) => (
    <GalleryItem
      post={item}
      handleGalleryItemPress={(imageName: string) =>
        viewModel.handleGalleryItemPress(imageName)
      }
    />
  );

  return (
    <ScrollView
      style={(stylesGlobal.ScrollContainer, styles.petProfileScroll)}
      nestedScrollEnabled={true}>
      <View style={styles.head}>
        <HeaderContentProfile
          petName={viewModel.pet.name}
          petCashValue={viewModel.pet.cash}
          petImage={viewModel.pet.image}></HeaderContentProfile>
        <Text style={styles.petStatus}>
          {viewModel.pet.status
            ? 'Aguardando apadrinhamento'
            : 'Apadrinhamento\ndesativado'}
        </Text>
      </View>
      {viewModel.loading ? (
        <Loading />
      ) : (
        <>
          <View style={stylesGlobal.BodyContainer}>
            <Tab
              firstText="Fotos e vídeos do animal"
              secondText="Comprovantes"
              handleFirstClick={viewModel.handlePetPhotosTabPressed}
              handleSecondClick={viewModel.handlePetReceiptTabPressed}
              selectedTab={viewModel.postModel.paymentvoucher}
            />

            <PostUploader
              viewModelOnChangeTextFunction={viewModel.setPostDescription}
              viewModelTextValue={viewModel.postModel.postDescription}
              handleTakePicture={viewModel.handleTakePicture}
              handleCameraModalClose={viewModel.handleCameraModalClose}
              cameraModalOpened={viewModel.cameraModalOpened}
              cameraRef={viewModel.cameraRef}
              pictureName={viewModel.postModel.picturePost}
              handlePublishButtonPress={viewModel.handlePublishButtonPress}
            />

            <FlatList
              style={styles.list}
              data={viewModel.posts}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={3}
            />

            <ImageModal
              imageName={viewModel.openedImageName}
              handleImageModalClose={viewModel.handleImageModalClose}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default PetProfileOwnersPerspectiveScreen;
