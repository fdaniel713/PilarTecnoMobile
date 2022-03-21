import React, { Component, useCallback } from 'react';
import {  SafeAreaView, View, Text } from 'react-native';
import { styles } from './styles'

export default Home = () => {

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContent}>
                <View style={styles.rowContent}>

                    <View style={[styles.buttonContent,{backgroundColor: 'red'}]}>
                         <Text> home1 </Text>
                    </View>
                    <View style={[styles.buttonContent,{backgroundColor: 'blue'}]}>
                         <Text> home2 </Text>   
                    </View>
                    
                    </View>

                    <View style={styles.rowContent}>
                    <View style={[styles.buttonContent,{backgroundColor: 'green'}]}>
                         <Text> home3 </Text>
                    </View>
                    <View style={[styles.buttonContent,{backgroundColor: 'purple'}]}>
                         <Text> home4 </Text>
                    </View>

                 </View>  
             </View>

        </SafeAreaView>
    )
}