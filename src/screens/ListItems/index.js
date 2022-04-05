import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import {  SafeAreaView, View,Dimensions, Text,  ImageBackground,ScrollView } from 'react-native';
import { Image,Button } from 'react-native-elements';
import { styles } from './styles'
import Header from '../../components/Header'
import { getPokemon, IMG_URL } from '../../api';
import {getPokemonImgId} from '../../utils'
import Collapsible from 'react-native-collapsible';
import { TouchableOpacity } from 'react-native-gesture-handler';


const width= Dimensions.get('window').width;
const heigth = Dimensions.get('window').height

export default ListItems = (props) => {
    const {url}=props.route.params.item
    const [pokemon, setPokemon] = useState()
    const [imgId, setImgId] = useState()
    const [isCollapsed, setIsCollapsed] = useState(true)


    useEffect(()=>{
        console.log(JSON.stringify(props))
        getPokemon(url).then(data=>{
            const path=url.split('/')
            setPokemon(data.results)
            setImgId(getPokemonImgId(path[6]))
        })
           
    })

    return(
        <View style={styles.container}>
          
                
                <Header leftIcon='arrow-back' title={pokemon?.name}  leftAction={()=> props.navigation.goBack()}/>

               <ScrollView contentContainerStyle={{marginTop: heigth/8, flex:1,width}}>
                   <View style={{height:100,width:100, zIndex:2,opacity:.8,borderRadius:100,right:10, backgroundColor:'#000000',position:'absolute', justifyContent:'center', marginRight:-10}}>
                       <Text style={{fontSize:20, fontWeight:'bold', color:'white' }}>{imgId}</Text>
                   </View>

                   <View style={{flex:1, backgroundColor: '#ffffff'}}> 
                    <Image style={{width:'100%', height:'100%'}}resizeMode='contain'  source={{uri: `${IMG_URL}${imgId}.png`}}/>
                   </View>

                   <View style={{height:0.5 ,width, backgroundColor:'#646464'}}/>
                   <View style={{flex:2,backgroundColor:'#fffff',alignItems:'center'}} >
                        
                       <View style={{height: heigth/3,width:width/1.1, borderRadius:8,backgroundColor:'blue',marginTop:'5%'}} >
                           <View style={{flexDirection:'row'}}>

                               <Text style={{fontSize:16,color:'white'}}><Text style={{fontSize:18,fontWeight:'bold', color:'white'}}> Peso:     </Text>{pokemon?.width}</Text>
                               <Text style={{fontSize:16,color:'white'}}><Text style={{fontSize:18,fontWeight:'bold', color:'white'}}> Altura:  </Text>{pokemon?.height}</Text>

                           </View>

                           <Text style={{fontSize:18,fontWeight:'bold', color:'white'}}>Tipos</Text>

                    <View style={{flexDirection:'row'}}>
                        <Text> tipos </Text>
                        {/* {pokemon?.types.map(type=>
                            (
                                <Text>{type.type.name}</Text>
                            )
                        )} */}


                    </View>

                    <View>
                    <View style={{flexDirection:'column', backgroundColor:'green'}}>
                        <TouchableOpacity onPress={()=>setIsCollapsed(!isCollapsed)}>
                          <Text> Habilidades</Text>  
                        </TouchableOpacity>
                        
                        <Collapsible collapsed={isCollapsed}>
                    
                                {pokemon?.abilities.map(a=>
                                    (
                                        < >
                                        <Text><Text style={{fontSize:30,fontWeight:'bold'}}>.</Text><Text> {a.ability.name}</Text></Text>
                                        </>
                                   )
                                   )}

                            </Collapsible>
                    </View>


                   </View>
                   </View>
                   </View>

               </ScrollView>

        </View>
    )
}