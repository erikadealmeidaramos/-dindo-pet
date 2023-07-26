import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  button: {
    borderRadius: 8,
    width: '48%',
    height: 60,
    marginTop: 30,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: Fonts.Label.fontFamily,
    fontSize: Fonts.Label.fontSize,
  },
  buttonPrimary: {
    backgroundColor: '#704721',
  },
  buttonTextPrimary: {
    color: '#FAF7F3',
  },
  buttonSecondary: {
    backgroundColor: '#DEDBD7',
  },
  buttonTextSecondary: {
    color: '#201104',
  },
});
