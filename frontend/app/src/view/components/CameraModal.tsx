import React from 'react';
import {TouchableOpacity, View, Text, Modal} from 'react-native';
import styles from '../styles/CameraModalStyle';
import {RNCamera} from 'react-native-camera';

interface Props {
  handleTakePicture: () => void;
  handleCameraModalClose: (done: boolean) => void;
  cameraModalOpened: boolean;
  cameraRef: React.MutableRefObject<RNCamera | null>;
}

export function CameraModal(props: Props) {
  const {
    handleTakePicture,
    handleCameraModalClose,
    cameraModalOpened,
    cameraRef,
  } = props;

  return (
    <Modal
      visible={cameraModalOpened}
      transparent={false}
      animationType="slide"
      onRequestClose={() => handleCameraModalClose(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.cameraContainer}>
          <RNCamera
            ref={(ref: RNCamera | null) => {
              cameraRef!.current = ref;
            }}
            style={styles.cameraPreview}
            type={RNCamera.Constants.Type.back}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle={'Permissão para usar a câmera'}
            permissionDialogMessage={
              'O aplicativo precisa de permissão para usar a câmera do seu dispositivo'
            }
          />
          <TouchableOpacity
            style={styles.takePictureButtonContainer}
            onPress={async () => {
              await handleTakePicture();
              handleCameraModalClose(true);
            }}>
            <Text style={styles.takePictureButtonLabel}></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.modalButtonsContainer}>
          <TouchableOpacity
            style={styles.cameraButtonContainer}
            onPress={() => handleCameraModalClose(false)}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default CameraModal;
