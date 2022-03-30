import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../screens/List'
import { enableScreens } from 'react-native-screens';
import ListItem from '../screens/ListItem';

const Stack = createStackNavigator();

export default ListStackNavigator=(props)=> {
  enableScreens();

  return (
    <Stack.Navigator>
     
      <Stack.Screen name="Lista" component={List} />
      

     
     
    </Stack.Navigator>
  );
}