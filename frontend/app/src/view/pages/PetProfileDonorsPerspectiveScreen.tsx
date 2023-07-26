import React from 'react';
import styles from '../styles/PetProfileDonorsPerspectiveScreenStyle';
import stylesGlobal from '../styles/GlobalStyle';
import {ScrollView, View, Text, FlatList} from 'react-native';
import {HeaderContentProfile} from '../components/HeaderContentProfile';
import {Button} from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import PetProfileDonorsPerspectiveScreenViewModel from '../viewModel/PetProfileDonorsPerspectiveScreenViewModel';
import {Tab} from '../components/Tab';
import ImageModal from '../components/ImageModal';
import {GalleryItem} from '../components/GalleryItem';
import {Post} from 'src/model/Post';
import SponsorshipModal from '../components/SponsorshipModal';
import {Loading} from '../components/Loading';

const PetProfileDonorsPerspectiveScreen = () => {
  const navigation = useNavigation();
  const viewModelProps = {navigation};
  const viewModel = PetProfileDonorsPerspectiveScreenViewModel(viewModelProps);

  const renderItem = ({item}: {item: Post}) => (
    <GalleryItem
      post={item}
      handleGalleryItemPress={(imageName: string) =>
        viewModel.handleGalleryItemPress(imageName)
      }
    />
  );

  return (
    <ScrollView style={stylesGlobal.ScrollContainer}>
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
            {viewModel.pet.status && (
              <Button
                text="Apadrinhar"
                handleClick={() => viewModel.setModalVisible(true)}
                customStyle={{
                  marginTop: 0,
                  marginBottom: 30,
                  width: '70%',
                }}></Button>
            )}

            <SponsorshipModal
              isModalVisible={viewModel.isModalVisible}
              setModalVisible={viewModel.setModalVisible}
              pix={viewModel.pet.user.pix}
            />

            <Text style={styles.contact}>
              Contato do tutor: {viewModel.pet.user.email}
            </Text>

            <Tab
              firstText="Fotos e vídeos do animal"
              secondText="Comprovantes"
              handleFirstClick={viewModel.handlePetPhotosTabPressed}
              handleSecondClick={viewModel.handlePetReceiptTabPressed}
              selectedTab={viewModel.postModel.paymentvoucher}
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

export default PetProfileDonorsPerspectiveScreen;
