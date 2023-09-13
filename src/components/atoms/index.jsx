import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    containerForm:{
      flex: 1,
      marginBottom: 250,
      alignItems: 'center'
    },
    button:{
      backgroundColor: '#7C0B0B',
      width: 254,
      height: 48,
      borderRadius: 30, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    textTitle:{
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    fontBigBold: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    textInput: {
      backgroundColor: 'rgba(7, 30, 34, 0.3)',
      width: 330,
      height: 50,
      borderRadius: 30,
      borderWidth: 2,
      fontSize: 16,
      textAlign: 'center',
    },
    textButton: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    containerHeader: {
      width: '100%',
      height: '15%',
      backgroundColor: '#7C0B0B'
    }
  });