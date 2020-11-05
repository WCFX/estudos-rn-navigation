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

        <Text style={styles.title}>Queremos saber{"\n"} mais sobre você !!</Text>
        <Text style={styles.lorem}>Somos uma empresa interessada em você,
        para que possamos conhecer mais o nosso candidato por favor,
        coloque o seu nome no input abaixo para que possamos conhecer melhor
        e traçar o melhor perfil !!
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