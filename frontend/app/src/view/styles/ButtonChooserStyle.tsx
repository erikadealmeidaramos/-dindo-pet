import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttonsContainer: {
    width: '50%',
  },
  button: {
    borderRadius: 8,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    backgroundColor: '#DEDBD7',
  },
  buttonText: {
    fontFamily: Fonts.Label.fontFamily,
    fontSize: Fonts.Label.fontSize,
    textAlign: 'center',
    color: '#a59d93',
    marginLeft: 10,
  },
  buttonTextSelected: {
    color: '#795b3f',
  },
  buttonSelected: {
    backgroundColor: '#FFA823',
  },
  warning: {
    color: '#dc3545',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
});
