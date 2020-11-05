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
      <Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#156eee',
            height: 80
          },
          headerTitleStyle: {
            color: '#FFF',
            fontSize: 23,
            fontFamily: 'Poppins_700Bold'
          }
        }}
      >
        <Screen 
        options={{
          headerShown: false
        }}
          name="Home"
          component={Home} />
        <Screen 
          options={{
            headerShown: true,
            title: 'Página Anterior',
            headerTitleAlign: 'left',
            
          }}
          name="About"
          component={About} />
      </Navigator>
    </NavigationContainer>
  );
}



