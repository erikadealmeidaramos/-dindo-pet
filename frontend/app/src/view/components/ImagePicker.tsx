import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, Image, Alert} from 'react-native';
import styles from '../styles/ImagePickerStyle';
import stylesGlobal from '../styles/GlobalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//ícones: https://pictogrammers.com/library/mdi/

export function ImagePicker(props: any) {
  const {
    imagePath,
    onPressSelectImage,
    invalid,
    invalidMessage,
    form,
    image,
    cameraPicture,
  } = props;

  const [initialRender, setInitialRender] = useState(true);
  const [imageValue, setImageValue] = useState('');

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      form.setFieldValue('image', image);
      form.setFieldValue('cameraPicture', cameraPicture);
      form.setFieldTouched('image', true);
      setImageValue(image);
    }
  }, [image]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPressSelectImage(false)}
        style={styles.imageContainer}>
        {(imagePath === '' ||
          imagePath === undefined ||
          imagePath === null) && (
          <View style={styles.content}>
            <Icon style={styles.icon} name="camera" size={35} />
            <Text style={[stylesGlobal.label, styles.label]}>
              Selecionar foto
            </Text>
          </View>
        )}

        {imagePath !== '' && imagePath !== undefined && imagePath !== null && (
          <Image
            style={styles.imageContainer}
            source={{
              uri: imagePath,
            }}
          />
        )}
      </TouchableOpacity>
      {imageValue == '' && invalid && (
        <Text style={[stylesGlobal.label, styles.warning]}>
          <Icon name="close" size={15} />
          {invalidMessage}
        </Text>
      )}
    </View>
  );
}

export default ImagePicker;
