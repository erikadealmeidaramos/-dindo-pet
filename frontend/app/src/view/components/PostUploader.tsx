import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/PostUploaderStyle';
import stylesGlobal from '../styles/GlobalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CameraModal from './CameraModal';

export function PostUploader(props: any) {
  const {
    viewModelOnChangeTextFunction,
    viewModelTextValue,
    handleTakePicture,
    handleCameraModalClose,
    cameraModalOpened,
    cameraRef,
    pictureName,
    handlePublishButtonPress,
  } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={[stylesGlobal.label, styles.input]}
        onChangeText={text => viewModelOnChangeTextFunction(text)}
        value={viewModelTextValue}
        placeholder="Escreva o que está pensando"
        multiline={true}
        numberOfLines={4}
      />
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.pictureContainer}
          onPress={handleCameraModalClose}>
          <Icon name="camera" style={styles.icon} />
          <Text style={styles.pictureLabel}>
            {pictureName != '' ? pictureName : 'Nenhuma foto capturada'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePublishButtonPress}>
          <Text style={styles.buttonText}>Publicar</Text>
        </TouchableOpacity>
      </View>

      <CameraModal
        handleTakePicture={handleTakePicture}
        handleCameraModalClose={handleCameraModalClose}
        cameraModalOpened={cameraModalOpened}
        cameraRef={cameraRef}
      />
    </View>
  );
}
