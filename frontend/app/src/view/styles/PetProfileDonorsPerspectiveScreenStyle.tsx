import {StyleSheet, Dimensions} from 'react-native';
import fonts from './Fonts';

const windowWidth = Dimensions.get('window').width;
const heightDimensions = Dimensions.get('screen').height;

const PetProfileDonorsPerspectiveScreenStyle = StyleSheet.create({
  head: {
    backgroundColor: '#ffa823ff',
    width: '100%',
    height: heightDimensions / 3 + 50,
    position: 'relative',
    top: -40,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  list: {
    marginTop: 30,
    flex: 1,
  },
  petStatus: {
    fontFamily: 'Poppins-Regular',
    width: '50%',
    fontSize: 14,
    color: '#38220D',
    height: 50,
    alignSelf: 'center',
    position: 'relative',
    backgroundColor: 'white',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textAlign: 'center',
  },
  contact: {
    fontSize: 16,
    fontFamily: fonts.Header2.fontFamily,
    color: '#38220D',
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 30,
    maxWidth: windowWidth,
  },
});

export default PetProfileDonorsPerspectiveScreenStyle;
