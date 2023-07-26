import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: '160%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#704721',
    borderRadius: 8,
    width: '50%',
    height: 40,
    padding: 2,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  secondButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  buttonText: {
    color: '#FAF7F3',
    fontFamily: Fonts.Label.fontFamily,
    fontSize: 12,
  },
  buttonActive: {
    backgroundColor: '#DEDBD7',
  },
  buttonTextActive: {
    color: '#201104',
  },
});
