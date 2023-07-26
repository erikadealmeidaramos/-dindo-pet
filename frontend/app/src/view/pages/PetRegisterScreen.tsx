import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from '../styles/PetRegisterScreenStyle';
import stylesGlobal from '../styles/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import PetRegisterScreenViewModel from '../viewModel/PetRegisterScreenViewModel';
import {TextField} from '../components/TextField';
import {DropDown} from '../components/DropDown';
import {Button} from '../components/Button';
import ImagePicker from '../components/ImagePicker';
import {MoneyField} from '../components/MoneyField';
import CameraModal from '../components/CameraModal';
import {Loading} from '../components/Loading';
import {ButtonIconChooser} from '../components/ButtonIconChooser';

const PetRegisterScreen = () => {
  const navigation = useNavigation();

  const viewModelProps = {navigation};
  const viewModel = PetRegisterScreenViewModel(viewModelProps);
  const {
    formik,
    speciesList,
    breedList,
    statusList,
    handleOptionSelect,
    handleOptionSelectBreed,
    handleOptionSelectStatus,
  } = PetRegisterScreenViewModel(viewModelProps);

  return (
    <ScrollView style={stylesGlobal.ScrollContainer}>
      <View style={[stylesGlobal.BodyContainer, styles.BodyContainer]}>
        <Text style={[stylesGlobal.header2, styles.subtitle]}>
          Dados do Pet
        </Text>
        {viewModel.loading ? (
          <Loading />
        ) : (
          <>
            <TextField
              onChangeText={formik.handleChange('name')}
              onBlur={formik.handleBlur('name')}
              value={formik.values.name}
              placeholder="Digite o nome do pet"
              label="Nome"
              invalid={
                (formik.errors.name ?? []).length > 0 && formik.touched.name
              }
              invalidMessage={formik.errors.name}
            />

            <ButtonIconChooser
              options={speciesList}
              label="Espécie"
              onSelect={handleOptionSelect}
              value={formik.values.breed.specie}
              selectedOption={viewModel.selectedSpecieOption}
              setSelectedOption={viewModel.setSelectedSpecieOption}
              form={formik}
              name="specie"
              invalid={false}
            />

            <DropDown
              options={breedList}
              label="Raça"
              onSelect={handleOptionSelectBreed}
              invalid={
                Object.keys(formik.errors.breed ?? []).length > 0 &&
                formik.touched.breed
              }
              invalidMessage={formik.errors.breed}
              value={formik.values.breed}
              selectedOption={viewModel.selectedBreedOption}
              setSelectedOption={viewModel.setSelectedBreedOption}
              form={formik}
              name="breed"
            />

            <ButtonIconChooser
              options={statusList}
              label="Status do apadrinhamento"
              onSelect={handleOptionSelectStatus}
              invalid={
                (formik.errors.status ?? []).length > 0 && formik.touched.status
              }
              invalidMessage={formik.errors.status}
              value={formik.values.status}
              selectedOption={viewModel.selectedStatusOption}
              setSelectedOption={viewModel.setSelectedStatusOption}
              form={formik}
              name="status"
            />

            <MoneyField
              onBlur={formik.handleBlur('cash')}
              value={formik.values.cash}
              placeholder="Insira um valor"
              label="Necessário no mês"
              invalid={
                (formik.errors.cash ?? []).length > 0 && formik.touched.cash
              }
              invalidMessage={formik.errors.cash}
              form={formik}
              name="cash"
            />

            <ImagePicker
              form={formik}
              image={viewModel.petModel.image}
              cameraPicture={viewModel.petModel.cameraPicture}
              imagePath={viewModel.petModel.imagePath}
              onPressSelectImage={viewModel.handleCameraModalClose}
              invalid={
                (formik.errors.image ?? []).length > 0 && formik.touched.image
              }
              invalidMessage={formik.errors.image}
            />

            <Button
              handleClick={formik.handleSubmit}
              text="Enviar"
              showSpinner={formik.isSubmitting}
            />

            <CameraModal
              handleTakePicture={viewModel.handleTakePicture}
              handleCameraModalClose={viewModel.handleCameraModalClose}
              cameraModalOpened={viewModel.cameraModalOpened}
              cameraRef={viewModel.cameraRef}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default PetRegisterScreen;
