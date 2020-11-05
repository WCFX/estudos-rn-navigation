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
      <View style={styles.contentText}>

        <Text style={styles.title}>Hello World !!!</Text>
        <Text style={styles.lorem}>Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Error minima blanditiis, sequi inventore, non adipisci
          quisquam et hic optio corporis 
          commodi ab animi asperiores vel cupiditate nemo quia earum mollitia
          cumque! Architecto nihil amet dolorum dignissimos, repudiandae eum ab a!
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  )
};


export default Home;