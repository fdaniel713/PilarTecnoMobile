import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Maps from '../screens/Map'
import { enableScreens } from 'react-native-screens';

const Stack = createStackNavigator();

export default MapStackNavigator=(props)=> {
  enableScreens();

  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Mapa" component={Maps} />
     


     
    </Stack.Navigator>
  );
}