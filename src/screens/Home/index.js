import React, { Component, useCallback } from 'react';
import {  SafeAreaView, View, Text, Pressable, ImageBackground, Image } from 'react-native';
import { styles } from './styles'

export default Home = (props) => {
    const {navigation} = props;

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.mainContent} source={require('../../aseests/patterns/image1.jpg')}>
                <View style={styles.rowContent}>

                    <Pressable 
                    style={[styles.buttonContent,{backgroundColor: 'red'}]}
                    onPress={()=>console.log('boton1')}
                    >
                         <Text style={styles.title}> Home </Text>
                    </Pressable>
                    <Pressable 
                    style={[styles.buttonContent,{backgroundColor: 'blue'}]}
                    onPress={()=>console.log('boton 2')}
                    >
                         <Text style={styles.title}> Perfil </Text>   
                    </Pressable>
                    
                    </View>

                    <View style={styles.rowContent}>
                    <Pressable 
                    style={[styles.buttonContent,{backgroundColor: 'green'}]}
                    onPress={()=>navigation.navigate('List')}
                    >
                         <Text style={styles.title}> Lista </Text>
                    </Pressable>
                    <Pressable 
                    style={[styles.buttonContent,{backgroundColor: 'purple'}]}
                    onPress={()=>console.log('boton 4')}
                    >
                         <Text style={styles.title}> Mapa </Text>
                    </Pressable>

                 </View>  
             </ImageBackground>

        </SafeAreaView>
    )
}