import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  bottomContainer: {
    display: 'flex',
    backgroundColor: '#D0CBC3',
    padding: 8,
    paddingEnd: 0,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 51,
  },
  pictureContainer: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '50%',
    overflow: 'hidden',
  },

  input: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: '#DEDBD7',
    padding: 10,
    backgroundColor: '#DEDBD7',
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 30,
  },

  icon: {
    color: '#FFA823',
    fontSize: 35,
    marginRight: 8,
  },

  pictureLabel: {
    color: '#201104',
    fontFamily: Fonts.Label.fontFamily,
    fontSize: 10,
  },

  button: {
    backgroundColor: '#704721',
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    width: '45%',
    height: 51,
    padding: 2,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAF7F3',
    fontFamily: Fonts.Label.fontFamily,
    fontSize: Fonts.Label.fontSize,
  },
});
