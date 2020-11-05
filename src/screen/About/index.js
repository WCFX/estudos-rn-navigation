import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';


const About = () => {

  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack()
  }

  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.contentText}>
        <Text style={styles.title}>SOBRE</Text>
        <Text style={styles.lorem} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nobis dolorem, distinctio tenetur quasi quisquam, adipisci reiciendis 
          soluta ullam repellat aliquid nam voluptates,
          nostrum nesciunt pariatur unde voluptatum quo modi ducimus earum odio 
          sequi? Quidem nihil fugit dicta possimus ipsam corporis.
        </Text>

          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};


export default About;