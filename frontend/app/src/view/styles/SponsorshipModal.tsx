import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  textBody: {
    fontFamily: Fonts.BodyText.fontFamily,
    fontSize: 16,
    color: '#201104',
  },
  footer: {
    marginTop: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
