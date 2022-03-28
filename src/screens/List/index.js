import 'react-native-gesture-handler';
import React from 'react';
import {  SafeAreaView, View, Text,  ImageBackground } from 'react-native';
import { styles } from './styles'

export default List = () => {

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.mainContent} source={require('../../aseests/patterns/image1.jpg')}>
                <View style={styles.rowContent}>

               <Text>

                    list

               </Text>

                 </View>  
             </ImageBackground>

        </SafeAreaView>
    )
}