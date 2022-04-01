import 'react-native-gesture-handler';
import React from 'react';
import {  SafeAreaView, View, Text,  ImageBackground } from 'react-native';
import { styles } from './styles'

export default ListItem = () => {

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.mainContent} source={require('../../aseests/patterns/galaxya.jpg')}>
                <View style={styles.rowContent}>
                <Header  />
               <Text>

                    list

               </Text>

                 </View>  
             </ImageBackground>

        </SafeAreaView>
    )
}