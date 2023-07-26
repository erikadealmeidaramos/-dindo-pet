import React from 'react';
import {TouchableOpacity, View, Text, Modal, Image} from 'react-native';
import styles from '../styles/ImageModalStyle';
import {uploadsFolderUrl} from '../../utils/constants';

interface Props {
  imageName: String;
  handleImageModalClose: () => void;
}

export function ImageModal(props: Props) {
  const {imageName, handleImageModalClose} = props;

  return (
    <Modal visible={imageName != ''} transparent={false} animationType="slide">
      <View style={styles.modalContainer}>
        <Image
          style={styles.imageContainer}
          source={{uri: `${uploadsFolderUrl}${imageName}`}}
        />

        <View style={styles.modalButtonsContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleImageModalClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default ImageModal;
