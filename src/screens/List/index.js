import 'react-native-gesture-handler';
import React, { useEffect, useState, useCallback } from 'react';
import {   View ,ScrollView,StyleSheet, Dimensions, FlatList, TouchableOpacity,RefreshControl} from 'react-native';
import { styles } from './styles'
import { getPokemonList, IMG_URL} from '../../api';
import {getPokemonImgId} from '../../utils'
import { Avatar, Button, ListItem } from 'react-native-elements';
import Header from '../../components/Header'
import ListItems from '../ListItems'
import { withSafeAreaInsets } from 'react-native-safe-area-context';



const width= Dimensions.get('window').width;
const heigth = Dimensions.get('window').height

const wait= (timeout)=>{
    return new Promise(resolve => setTimeout(resolve,timeout));
}

export default List = (props) => {
    const [pokemons,setPokemons] = useState()
    const [next,setNext] = useState()
    const [refreshing, setRefreshing]= useState(false)


    useEffect(() =>{
        getPokemonList().then(data=>{
            setPokemons(data.results)
            setNext(data.next)
        })
    },[])

    const loadMore=()=> {
    getPokemonList(next).then(data=>{
        setPokemons([...pokemons, ...data.results])
        setNext(data.next)
    })
    }

    const onRefresh= useCallback(()=> {
        setRefreshing(true)
        wait(2000).then(()=> setRefreshing(false));
    },[])

    const renderItem=(item)=>{
        const path = item.url.split("/");
        const imgID = getPokemonImgId(path[6]);

        return(
                <TouchableOpacity onPress={()=>props.navigation.navigate('ListItems',item={item})} style={{backgroundColor: '#293847'}}>
            <ListItem bottomDivider style={{width, paddingHorizontal:5}}> 
           
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  
                </ListItem.Content>
                <Avatar source={{uri: `${IMG_URL}${imgID}.png`}}/>
               
            </ListItem> 
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
        <View style={styles.mainContent}>

                <Header/>

                <FlatList
                data={pokemons}
                renderItem={(item,index)=>renderItem(item.item,index)}
                keyExtractor={(item,index)=>index}
                style={{marginTop: heigth/8}}
                refreshControl={
                    <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    />
                }
                ListFooterComponent={
                    <Button title='cargar mas' onPress={()=> loadMore()}/>
                }
                
                />

                
             </View>

        </View>
    )
}