import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#D0CBC3',
  },
  buttonContainer: {
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
