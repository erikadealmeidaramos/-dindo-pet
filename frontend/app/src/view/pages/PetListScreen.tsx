import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/PetListScreenStyle';
import stylesGlobal from '../styles/GlobalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PetListTile } from '../components/PetListTile';
import PetListScreenViewModel from '../viewModel/PetListScreenViewModel';
import { useNavigation } from '@react-navigation/native';
import { Pet } from 'src/model/Pet';
import { Loading } from '../components/Loading';

const PetListScreen = () => {
  const navigation = useNavigation();

  const viewModelProps = { navigation };
  const viewModel = PetListScreenViewModel(viewModelProps);

  const renderItem = ({ item }: { item: Pet }) => (
    <PetListTile
      pet={item}
      handlePetProfileRedirect={viewModel.handlePetProfileRedirect}
      handleDeleteButtonPress={viewModel.handleDeleteButtonPress}
      handleEditButtonPress={viewModel.handleEditButtonPress}
    />
  );

  return (
    <View style={stylesGlobal.BodyContainer}>
      {viewModel.loading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.header}>
            <View></View>
            <Text style={stylesGlobal.header1}>Meus pets</Text>
            <TouchableOpacity onPress={viewModel.handleRegisterPet}>
              <Icon name="plus" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={viewModel.petList}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}></FlatList>
        </>
      )}
    </View>
  );
};

export default PetListScreen;
