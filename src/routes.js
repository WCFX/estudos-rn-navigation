import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screen/Home';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator
        headerMode={false}
      >
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}



