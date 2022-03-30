import React,{ Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';

import { Icon } from 'react-native-elements'
import Profile from '../screens/Profile';
import List from '../screens/List';
import Mapa from '../screens/Map';



const Tab = createMaterialBottomTabNavigator();

export default function Tabs () {

return (
  

<Tab.Navigator activeColor= {'white'}
    inactiveColor= {'red'}
    >

    <Tab.Screen name="Casa" component={Home}
      options={{
        tabBarIcon: ({ color }) => (
        <Icon name={'home'} type="font-awesome-5" size={20} color={'cyan'} />
        ),
        }}
        
    />
    <Tab.Screen name="Perfil" component={Profile}
    options={{
        tabBarIcon: ({ color }) => (
        <Icon name={'user'} type="font-awesome-5" size={20} color={'cyan'} />
        ),
        }}
        
    />

    <Tab.Screen name="Lista" component={List}
      options={{
        tabBarIcon: ({ color }) => (
        <Icon name={'list'} type="font-awesome-5" size={20} color={'cyan'} />
        ),
        }}
        
    />
    <Tab.Screen name="Mapa" component={Mapa}
      options={{
        tabBarIcon: ({ color }) => (
        <Icon name={'map'} type="font-awesome-5" size={20} color={'cyan'} />
        ),
        }}
        
    />


</Tab.Navigator>


);
}
