import 'react-native-gesture-handler';
import React, { Component, useCallback } from 'react';
import { 
    View, 
    Text
} from 'react-native';
import Home from '../screens/Home';
import AppStack from '../routs/app';
import { NavigationContainer } from '@react-navigation/native';

export default App = (props) => {

    return(
      //  <Provider store={store}>
        <NavigationContainer >
            <AppStack />
        </NavigationContainer>
   // </Provider>
    )
}