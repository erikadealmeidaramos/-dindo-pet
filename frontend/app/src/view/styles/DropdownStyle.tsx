import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  selectedOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#DEDBD7',
    borderRadius: 4,
  },
  dropdown: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DEDBD7',
    borderRadius: 4,
    backgroundColor: '#DEDBD7',
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#DEDBD7',
    padding: 10,
    marginBottom: 4,
    backgroundColor: '#DEDBD7',
    borderRadius: 8,
    flexDirection: 'row',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  warning: {
    color: '#dc3545',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
});
