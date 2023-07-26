import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    minWidth: '100%',
    height: 180,
    backgroundColor: '#DEDBD7',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#FFA823',
  },
  label: {
    color: '#8A8782',
  },
  imageContainer: {
    flex: 1,
    minWidth: '100%',
    borderRadius: 8,
  },
  warning: {
    color: '#dc3545',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
});
