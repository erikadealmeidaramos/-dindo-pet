import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//ícones: https://pictogrammers.com/library/mdi/
import styles from '../styles/PetListTileStyle';
import {uploadsFolderUrl} from '../../utils/constants';

export function PetListTile(props: any) {
  const {
    pet,
    handlePetProfileRedirect,
    handleDeleteButtonPress,
    handleEditButtonPress,
  } = props;

  return (
    <TouchableOpacity onPress={() => handlePetProfileRedirect(pet)}>
      <View style={styles.container}>
        <Image
          style={styles.petPicture}
          source={{uri: `${uploadsFolderUrl}${pet.image}`}}
        />
        <Text style={styles.petName}>{pet.name}</Text>
        <View style={styles.statusContainer}>
          {pet.status ? (
            <Icon
              name="lock-open-variant"
              style={[styles.statusIcon, {color: '#39c358'}]}
            />
          ) : (
            <Icon name="lock" style={[styles.statusIcon, {color: '#e74a59'}]} />
          )}
          <Text style={styles.statusText}>
            {pet.status ? 'Ativo' : 'Inativo'}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleEditButtonPress(pet)}>
          <Icon name="pencil" style={[styles.icon, {color: '#398ae1'}]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteButtonPress(pet)}>
          <Icon name="delete" style={[styles.icon, {color: '#e74a59'}]} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
