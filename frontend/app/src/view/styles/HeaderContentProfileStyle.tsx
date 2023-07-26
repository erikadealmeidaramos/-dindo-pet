import {StyleSheet, Dimensions} from 'react-native';
import fonts from './Fonts';

const windowWidth = Dimensions.get('window').width;
const heightDimensions = Dimensions.get('screen').height;

const HeaderContentProfileStyle = StyleSheet.create({
  petImage: {
    marginTop: 10,
    width: windowWidth / 3.2,
    height: heightDimensions / 6,
    alignSelf: 'center',
    borderRadius: 100,
  },
  petNameText: {
    fontFamily: fonts.Header1.fontFamily,
    fontSize: fonts.Header2.fontSize,
    color: fonts.Header1.color,
    alignSelf: 'center',
    marginTop: 10,
  },
  PetCashValueText: {
    fontFamily: fonts.Header1.fontFamily,
    fontSize: fonts.Label.fontSize,
    color: 'white',
    alignSelf: 'center',
  },
  headerContent: {
    marginTop: 25,
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    height: heightDimensions / 3,
  },
});

export default HeaderContentProfileStyle;
