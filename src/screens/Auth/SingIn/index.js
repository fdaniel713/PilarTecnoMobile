import 'react-native-gesture-handler';
import React, { useState , Component} from "react";
import { useDispatch } from 'react-redux'
import { View, Text,Dimensions } from "react-native";
import { styles } from "./styles";
import { Button, Icon, Input } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {actions} from '../../../store/actions'


const width= Dimensions.get('window').width
const height= Dimensions.get('window').height


export default SignIn = () => {
    const [ email, setEmail ] = useState('');
    const [ pw, setPw ] = useState('');

    const dispatch = useDispatch ()

  const onChangeEmail = (value)=>{
        setEmail(value)
  }
const onChangePw = (value)=>{
      setPw(value)
  }

  const _singIn = async()=> {
    try{
        await AsyncStorage.setItem('user',JSON.stringify(true))
    }catch (e){
        //saving err
    }
    dispatch (actions.user.setUser(true))
    //llamar a la funcion de la api
  }

    return (

        <View style={styles.container}>

            <View style={{flexDirection:'column',width}}>
                <View style={{marginVertical:'15%'}}> 
                    <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold'}} > Ingresar a Pilar Tecno </Text>
                    <Text>{email}</Text>
                    <Text>{pw}</Text>

                </View>
                <Input
                placeholder='Correo Electronico'
                leftIcon={{type:'font-awesome',name: 'user'}}
                onChangeText={value=>onChangeEmail(value)}
/>

                <Input 
                placeholder='Contraseña'
                leftIcon={{type:'font-awesome',name: 'lock'}}
                onChangeText={value=>onChangePw(value)}
               keyboardType='phone-pad'
/>
            <View style={{alignItems:'center'}}>
                <Button 
                title='Ingresar'                    
                    onPress={()=>_singIn()}
                    containerStyle={{width:'50%'}}
                    />

            </View>
            </View>

        </View>


    )
}
 