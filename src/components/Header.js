import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    StyleProp,
    TextStyle,
    ViewStyle,
    } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from "../../constants";
   

    export default Header = () => {

        const docs = () => {
           
        };


        return (
        <SafeAreaProvider style={{position: 'absolute' , top:-330}}>
            <HeaderRNE
            containerStyle={styles.headerContainer}
            backgroundColor='#6F686D'
            leftComponent={{
                icon: 'menu',
                color: '#fff',
                marginTop: 5,
               // marginRight:130
            }}
            rightComponent={
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={docs}>
                    <Icon name="description" color="white" />
                    </TouchableOpacity>
                </View>
            }
            centerComponent={{ text: 'Pilar Tecno', style: styles.heading }}
            />
        </SafeAreaProvider>
        );
        };

const styles = StyleSheet.create({
    headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    //paddingHorizontal:130
    },
    heading: {
    
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    },
    headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
   // marginLeft:130
    },
    subheaderText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    },
  
    });