import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../styles/HeaderContentProfileStyle';
import {uploadsFolderUrl} from '../../utils/constants';

export function HeaderContentProfile(props: any) {
  const {petImage, petName, petCashValue} = props;
  return (
    <View style={styles.headerContent}>
      <Image
        source={{uri: `${uploadsFolderUrl}${petImage}`}}
        style={styles.petImage}
        resizeMode={'contain'}
      />
      <Text style={styles.petNameText}>{petName}</Text>
      <Text style={styles.PetCashValueText}>
        Necessário no mês: R$ {petCashValue}
      </Text>
    </View>
  );
}
