import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './style';


const About = () => {

  const navigation = useNavigation();

  const route = useRoute();

  const { name } = route.params;

  function handleBack(){
    navigation.goBack()
    // navigation.popToTop() <- Volta para a rota raiz
  }

  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.contentText}>
        <Text style={styles.title}>Olá {name}</Text>
        <Text style={styles.lorem} >A SpaceX está contratando colaboradores
        que se propoem entrar em um foguete e cair diretamente na boca do
        vulcão, nós nos propusemos ajudar todos os nossos colabores a chegar
        no objetivo.{name} O que acha de embarcar nesse foguete ???
        </Text>

          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <BorderlessButton onPress={() => {}} style={styles.buttonPlus} >
            <Feather name="plus" size={24} color="#15B6D6" />
          </BorderlessButton>
      </View>
    </SafeAreaView>
  )
};


export default About;