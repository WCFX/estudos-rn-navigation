import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';


const Home = () => {

  const navigation = useNavigation();

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Olá Mundo de merda</Text>
    </SafeAreaView>
  )
};


export default Home;