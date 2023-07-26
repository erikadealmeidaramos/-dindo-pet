import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cameraContainer: {
    flex: 1,
  },
  cameraPreview: {
    flex: 1,
  },
  takePictureButtonContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 36,
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#fff',
  },
  takePictureButtonLabel: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#D0CBC3',
  },
  cameraButtonContainer: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    backgroundColor: '#D0CBC3',
    color: Fonts.Label.color,
    fontSize: Fonts.Label.fontSize,
    fontFamily: Fonts.Label.fontFamily,
    textAlign: 'center',
  },
});
