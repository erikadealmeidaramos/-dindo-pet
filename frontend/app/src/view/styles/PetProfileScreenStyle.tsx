import {Dimensions, StyleSheet} from 'react-native';
const heightDimensions = Dimensions.get('screen').height;

export default StyleSheet.create({
  list: {
    marginTop: 30,
    flex: 1,
  },
  petProfileScroll: {
    height: 'auto',
    flexGrow: 1,
    maxWidth: '100%',
  },
  head: {
    backgroundColor: '#ffa823ff',
    width: '100%',
    height: heightDimensions / 3 + 50,
    position: 'relative',
    top: -40,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
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
});
