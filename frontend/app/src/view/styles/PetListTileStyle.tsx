import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: '160%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  petPicture: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  statusContainer: {
    width: 'auto',
    maxWidth: '20%',
    minWidth: '20%',
    height: 'auto',
    padding: 8,
    backgroundColor: '#FAF7F3',
    borderRadius: 8,
    shadowColor: '#201104',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  statusText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#38220D',
  },

  petName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#704721',
    maxWidth: '25%',
    minWidth: '25%',
  },

  icon: {
    fontSize: 30,
    color: '#FFA823',
  },
  statusIcon: {
    fontSize: 16,
    textAlign: 'center',
  },
});
