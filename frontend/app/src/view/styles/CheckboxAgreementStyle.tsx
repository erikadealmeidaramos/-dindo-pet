import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'flex-start',
    backgroundColor: 'Yellow',
  },
  label: {
    fontFamily: Fonts.Label.fontFamily,
    fontSize: Fonts.Label.fontSize,
    color: 'gray',
    maxWidth: '95%',
  },
  warning: {
    color: '#dc3545',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
  labelLink: {
    fontFamily: Fonts.Link.fontFamily,
    fontSize: Fonts.Link.fontSize,
    color: Fonts.Link.color,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  containerCheckbox: {
    marginTop: 20,
    marginBottom: 20,
  },
  innerContainerCheckbox: {
    flexDirection: 'row',
    maxWidth: '100%',
    minWidth: '100%',
  },
  checkboxText: {
    fontFamily: Fonts.Header2.fontFamily,
    fontSize: Fonts.Header2.fontSize,
    color: Fonts.Header2.color,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  openButton: {
    backgroundColor: '#F194FF',
  },
  closeButton: {
    backgroundColor: '#ff8000',
    alignSelf: 'flex-end',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textModal: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
