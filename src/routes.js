import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screen/Home';
import About from './screen/About';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f29'}
        }}
          name="Home"
          component={Home} />
        <Screen 
          options={{
            headerShown: true,
            title: 'Página Anterior'
          }}
          name="About"
          component={About} />
      </Navigator>
    </NavigationContainer>
  );
}



