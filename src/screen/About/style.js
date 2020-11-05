import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    maxWidth: '100%',
  },
  contentText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Nunito_700Bold',
    color: '#156e44'
  },
  lorem: {
    fontSize: 16,
    color: '#044444',
    textAlign: 'center',
    marginBottom: 30,
    marginVertical: 10,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    padding: 20,
    backgroundColor: '#066',
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    fontFamily: 'Archivo_600SemiBold',
  }
  
});


export default style;