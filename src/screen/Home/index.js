import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = () => {

  const [name, setName ] = useState('');

  const navigation = useNavigation();


  function handleSubmit() {
    navigation.navigate('About', {name})
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.contentText}>

        <Text style={styles.title}>Queremos saber mais {"\n"}sobre você, vamos lá?!?</Text>
        <Text style={styles.lorem}>Para que possamos conhece-lo mais a fundo 
        por favor, coloque o seu nome no input abaixo, assim podemos nos comunicar 
        melhor. O que achas? Vamos lá...
        </Text>

        <TextInput 
          placeholder="Coloque seu nome aqui"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
  
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  )
};


export default Home;