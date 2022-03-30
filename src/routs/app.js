
import 'react-native-gesture-handler';
import React, {Component, useCallback} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import List from '../screens/List'
import Maps from '../screens/Map'
import Profile from '../screens/Profile'


const Stack = createStackNavigator();

export default AppStack=(props)=> {
 

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppStack" component={Tabs} />
      <Stack.Screen name="Profile" component={Profile} />

       <Stack.Screen name="List" component={List} />
       <Stack.Screen name="Map" component={Maps} />
     


     
    </Stack.Navigator>
  );
}