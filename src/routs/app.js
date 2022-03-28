
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List'
import Maps from '../screens/Map'
import Profile from '../screens/Profile'
import { enableScreens } from 'react-native-screens';

const Stack = createStackNavigator();

export default AppStack=(props)=> {
  enableScreens();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Map" component={Maps} />
      <Stack.Screen name="Profile" component={Profile} />


     
    </Stack.Navigator>
  );
}