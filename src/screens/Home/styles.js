import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItem: 'center'
      },

    buttonContent: {
      width: width/4,
      height: height/4,
      margin: 50,
      borderRadius:10,
      alignItem: 'center',
      justifyContent:'center'
    },

    mainContent: {
   
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height,
      flex: 1,
      backgroundColor: '#345678'
    },

    rowContent: {
      
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      
      width: '100%',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
     


    }
})