import {Alert} from 'react-native';

export const showAlert = (title: string, message: string) => {
  Alert.alert(title, message, [{text: 'OK', onPress: () => {}}], {
    cancelable: true,
  });
};

export const showConfirmAlert = (title: string, message: string, handleConfirm: ()=>void) => {
  var returnValue:Boolean = false;

  Alert.alert(title, message, [
    {
      text: 'Cancelar',
      onPress: () => {},
      style: 'cancel',
    },
    { text: 'Confirmar', onPress: handleConfirm },
  ],
  { cancelable: false });
};


