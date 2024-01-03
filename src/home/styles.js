import { StyleSheet, Dimensions } from "react-native";


const wHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    backgroundImage: {
          uri: '../assets/fondo-home.png'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: wHeigth,
      },
      containerimages: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      borderImg: {
       
        flex: 2,
      },
      imageLeft: {
        height: 150,
        width: 150,
        transform: [{rotate: '-15deg'}],
        borderColor: 'black',
        borderWidth: 0.5,
      },
      imageRight: {
        height: 150,
        width: 150,
        transform: [{rotate: '15deg'}],
        borderColor: 'black',
        borderWidth: 1,
      },
    
      imageCenterRight: {
        height: 150,
        width: 150,
        transform: [{rotate: '3deg'}],
        borderColor: 'black',
        borderWidth: 1,
      },
      textLeft: {
        fontSize: 20,
        textAlign: 'center',
        transform: [{rotate: '-15deg'}],
        color: 'blue',
      },
      textRight: {
        fontSize: 20,
        textAlign: 'center',
        transform: [{rotate: '+15deg'}],
        color: 'blue',
      },
      textCenterRight: {
        fontSize: 20,
        textAlign: 'center',
        transform: [{rotate: '3deg'}],
        color: 'blue',
      },
     
      Title: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 37,
        textShadowColor: '#00003d', 
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 5, 
        color: '#1e90ff',
      },
});

export {styles}