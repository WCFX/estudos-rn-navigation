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
    backgroundColor: '#156eee',
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    fontFamily: 'Archivo_600SemiBold',
  },
  buttonPlus:{ 
    backgroundColor: '#333',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 80,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  }
  
});


export default style;