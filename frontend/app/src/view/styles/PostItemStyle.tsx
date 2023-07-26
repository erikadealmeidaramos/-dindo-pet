import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  link: {
    height: 320,
    minWidth: '100%',
  },
  container: {
    minWidth: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  header: {
    fontFamily: Fonts.Header2.fontFamily,
    fontSize: Fonts.Header2.fontSize,
    color: Fonts.Header2.color,
    marginLeft: 10,
    alignSelf: 'center',
  },
  description: {
    fontFamily: Fonts.BodyText.fontFamily,
    fontSize: Fonts.BodyText.fontSize,
    color: Fonts.BodyText.color,
    minWidth: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 5,
  },
  whiteSpace: {
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  picture: {
    height: '55%',
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
