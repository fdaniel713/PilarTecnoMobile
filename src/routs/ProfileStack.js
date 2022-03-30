import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile'
import { enableScreens } from 'react-native-screens';

const Stack = createStackNavigator();

export default ProfileStackNavigator=(props)=> {
  enableScreens();

  return (
    <Stack.Navigator>
    
      <Stack.Screen name="Perfil" component={Profile} />


     
    </Stack.Navigator>
  );
}