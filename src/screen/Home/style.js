import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    maxWidth: '100%',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Nunito_700Bold',
    color: '#156e44'
  },
  contentText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  lorem: {
    fontSize: 16,
    color: '#044444',
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    padding: 20,
    backgroundColor: '#f29',
    width: 200,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    marginVertical: 30,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    fontFamily: 'Archivo_600SemiBold',

  }
});


export default style;