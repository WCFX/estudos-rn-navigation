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
    color: '#156eee',
    textAlign: 'center',
  },
  contentText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  lorem: {
    fontSize: 16,
    color: '#111',
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
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    fontFamily: 'Archivo_600SemiBold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: '70%',
    height: 50,
    padding: 10,    
    fontSize: 22,
  },
});


export default style;