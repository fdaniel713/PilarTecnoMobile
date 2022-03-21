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
      width: width/3,
      height: height/3,
      margin: 10,
      borderRadius:10
    },

    mainContent: {
   
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    rowContent: {
      
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
})