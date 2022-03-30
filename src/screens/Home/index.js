import 'react-native-gesture-handler';
import React, { Component, useCallback } from 'react';
import {  SafeAreaView, View, Text, Pressable, ImageBackground, ToastAndroid } from 'react-native';
import { styles } from './styles'

export default Home = (props) => {
    const {navigation} = props;

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.mainContent} source={require('../../aseests/patterns/image1.jpg')}>
                <View style={styles.rowContent}>

                    <Pressable 
                    style={[styles.buttonContent,{backgroundColor: 'red'}]}
                    onPress={()=>ToastAndroid.show('ESTAS EN HOME', ToastAndroid.SHORT)}
                    >
                         <Text style={styles.title}> Home </Text>
                    </Pressable>
                    <Pressable 
                    style={[styles.buttonContent,{backgroundColor: 'blue'}]}
                    onPress={()=>props.navigation.navigate('Perfil')}
                    >
                         <Text style={styles.title}> Perfil </Text>   
                    </Pressable>
                    
                    </View>

                    <View style={styles.rowContent}>
                    <Pressable 
                    style={[styles.buttonContent,{backgroundColor: 'green'}]}
                    onPress={()=>props.navigation.navigate('Lista')}
                    >
                         <Text style={styles.title}> Lista </Text>
                    </Pressable>
                    <Pressable 
                    style={[styles.buttonContent,{backgroundColor: 'purple'}]}
                    onPress={()=>props.navigation.navigate('Mapa')}
                    >
                         <Text style={styles.title}> Mapa </Text>
                    </Pressable>

                 </View>  
             </ImageBackground>

        </SafeAreaView>
    )
}