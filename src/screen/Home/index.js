import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = () => {

  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate('About')
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Olá Mundo de merda</Text>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};


export default Home;