
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List'
import Maps from '../screens/Map'
import Profile from '../screens/Profile'
import { enableScreens } from 'react-native-screens';

const HomeStack = createStackNavigator();

export default HomeStack=(props)=> {
  enableScreens();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="List" component={List} />
      <HomeStack.Screen name="Map" component={Maps} />
      <HomeStack.Screen name="Profile" component={Profile} />


     
    </HomeStack.Navigator>
  );
}