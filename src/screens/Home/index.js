import React, { Component, useCallback} from 'react';
import {  SafeAreaView, View, Text, Pressable, ImageBackground, Image } from 'react-native';
import { styles } from './styles'

export default Home = () => {

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.mainContent}source={require('../../assets/image/image2.jpg')}>
                <View style={styles.rowContent}>

                    <Pressable 
                         style={[styles.buttonContent,{backgroundColor: ' red'}]}
                              OnPress={()=>console.log('boton1')}
                              >
                              <Text style={styles.title}> Home</Text>
                    </Pressable>
                    <Pressable style={[styles.buttonContent,{backgroundColor: 'pink'}]}
                    OnPress={()=>console.log('boton2')}
                    >
                    <Text style={styles.title}> Perfil</Text>
                    </Pressable>
                    
                    </View>

                    <View style={styles.rowContent}>
                    <Pressable 
                         style={[styles.buttonContent,{backgroundColor: 'yellow'}]}
                         OnPress={()=>console.log('boton3')}
                              >
                          <Text style={styles.title}>Lista</Text>
                    </Pressable>
                    <Pressable 
                         style={[styles.buttonContent,{backgroundColor: 'purple'}]}
                         OnPress={()=>console.log('boton4')}
                              >
                          <Text style={styles.title}> Mapa</Text>
                    </Pressable>

                 </View>  
             </ImageBackground>

        </SafeAreaView>
    )
}