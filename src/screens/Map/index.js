import React, { useState, useEffect, useCallback } from "react";
import { Dimensions, SafeAreaView, View, Text, ImageBackground } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { Icon, Image, Button } from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';
import Header from '../../components/Header';
import { styles } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//Configuración básica: CONSTANTES PARA EL RENDERIZADO
const ASPECT_RADIO = width / height;
const LATITUDE = -32.9320576;
const LONGITUDE = -68.822851;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RADIO;

export default Mapa = (props) => {
    const [mapType, setMapType] = useState('standard');

    //const [mapType, setMapType] = useState('standard');
    //Definir variable region
    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }
    )


    useEffect(()=>{
        console.log(region)
    },[])

       //Cambiar region
    onRegionChange = region => {
      
       setRegion(region)
        
    }

    const changeMapType = () => {
        if (mapType === 'standard') {
            setMapType('satellite')
        } else {
            setMapType('standard')
        }
    }


    //centrar mapa
    const fitCoordinates = async () => {
        console.log("mapa centrado")
        _getLocation()
        //this._getLocation()
    }
       //Obtener ubicacion actual
       _getLocation = async () => {
        await Geolocation.getCurrentPosition(
            async posicion => {
                const longitude = posicion.coords.longitude;
                const latitude = posicion.coords.latitude;
                this.mapRef.animateToRegion(
                    {
                        latitude,
                        longitude,
                        latitudeDelta: region.latitudeDelta,
                        longitudeDelta: region.longitudeDelta
                    },
                    1000
                );
                setRegion({ region: { ...region, longitude, latitude } })
                console.log('posicion actual... Latitud:' + `${JSON.stringify(longitude)}` + 'latitud:' + `${JSON.stringify(latitude)}`)
            },
            (error) => {
                console.log('')
                console.log('')
                console.log('')
                console.log('')
                console.log(error.code, error.message);
            },
            {
                accuracy: {
                    android: 'high',
                    ios: 'best',
                },
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                distanceFilter: 0,
                forceRequestLocation: true,
            }
        )
    }

    return(
        <View style={styles.container}>
          
              <Header/>
              
               <MapView 
                initialRegion={region}
               style={styles.map}
               mapType={mapType}
               
               onRegionChangeComplete={(region)=>onRegionChange(region)}
               
               />


                <View style={styles.markerIcon}>
                <Icon
                    name="crosshairs"
                    type="font-awesome"
                    color='#8d2d84'
                    size={width / 10}
                    onPress={() => fitCoordinates()}
                />
                 </View>


            <View style={styles.markerFixed}>
                <Image style={styles.marker} source={require('../../aseests/patterns/pin.png')} />
            </View>

              <View style={styles.mapButtonView} >
                <Button
                    title="Cambio de Mapa"
                    containerStyle={styles.mapButtonContent}
                    buttonStyle={styles.mapButtonStandard}
                    onPress={() => changeMapType()}
                />
                     
                <Button
                    title="Guardar Posición"
                    containerStyle={styles.mapButtonContent}
                    buttonStyle={styles.mapButtonSaveLocation}
                    onPress={() => saveLocation()}
                />
            </View>

            <SafeAreaView style={styles.footer}>
                <Text style={styles.region}> Longitud:{JSON.stringify(region.longitude)}{"\n"} Latitud:{JSON.stringify(region.latitude)}</Text>
            </SafeAreaView>
       

        </View>
    )
}