import 'react-native-gesture-handler';
import React from 'react';
import {  SafeAreaView, View, Text,  ImageBackground } from 'react-native';
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { Button, Icon, Input } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {actions} from '../../store/actions'
import Header from '../../components/Header'

export default Profile = () => {

const dispatch = useDispatch()
    
  const _singOut = async()=> {
    try{
        await AsyncStorage.delItem('user',JSON.stringify(false))
    }catch (e){
        //saving err
    }
    dispatch (actions.user.setUser(false))
    //llamar a la funcion de la api
  }

    return(
        <View style={styles.container}>
          
                <Header  />
              
              
                <View style={styles.infoContainer}>
                        <Text style={{fontSize:20, color:"black", marginBottom:6}}>Fuentes Daniel</Text>
                        <Text style={{fontSize:15, color:"black", marginBottom:10}}>fuentes_daniel@gmail.com</Text>
                    </View>


               <View style={{alignItems:'center', width: '90%', marginTop:60}}>
               <Button 
                title='Salir'                    
                    onPress={()=>_singOut()}
                    containerStyle={{width:'50%'}}
                    />

                 </View> 
                 
   

        </View>
    )
}