import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'flex-start'
    },
      icon: {
        color: '#FFA823',
        position: 'absolute',
        top: 40,
        left: 10
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
        paddingHorizontal: 70,
        marginTop: 30
      },
      warning: {
        color: '#dc3545',
        marginBottom: 5,
        fontFamily: 'Poppins-Regular'
      }
});