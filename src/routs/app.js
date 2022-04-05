
import 'react-native-gesture-handler';
import React, {Component, useCallback} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import List from '../screens/List'
import ListItems from '../screens/ListItems'
import Maps from '../screens/Map'
import Login from '../screens/Auth/SingIn'
import Profile from '../screens/Profile'
import { useSelector } from 'react-redux';



const Stack = createStackNavigator();

export default AppStack=(props)=> {
  const user = useSelector(state => state.user.user)

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user?
      <Stack.Screen name="AppStack" component={Tabs} />
      :
      <Stack.Screen name="Login" component={Login} />


        }
      <Stack.Screen name="Profile" component={Profile} />

       <Stack.Screen name="List" component={List} />
       <Stack.Screen name="ListItems" component={ListItems} />

       <Stack.Screen name="Map" component={Maps} />
     


     
    </Stack.Navigator>
  );
}