
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List'
import { enableScreens } from 'react-native-screens';

const Stack = createStackNavigator();

export default AppStack=(props)=> {
  enableScreens();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
     
    </Stack.Navigator>
  );
}