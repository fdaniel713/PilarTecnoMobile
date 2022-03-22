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
      margin: 10,
      borderRadius:10,
      justifyContent: 'center',
      alignItem: 'center'
    },

    mainContent: {
      flex: 1,
      width,
      height,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
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
      fontWeight:'bold',
     

    }
})