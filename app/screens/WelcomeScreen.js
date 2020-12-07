import React from 'react';
import { 
    ImageBackground, 
    StyleSheet  ,SafeAreaView ,View, Alert, Text ,TouchableOpacity, Image
  } from 'react-native';

import appColors from '../config/color.js';

import AppButton from '../components/AppButton'


function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius = {2}
            source = {require('../assets/splash1.jpg')}
            style = {styles.bg}
        > 
            <View  style ={styles.logoContainer}>
                <Image  styles = {styles.logos} 
                source = {require('../assets/logo.png')} 
                //source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                /> 
                <Text>
                    Best of the best 
                </Text>
            </View> 
            <View style={styles.btnsContainer}>
               <AppButton title="Login" onPress={()=>console.log("Login is pressed")}></AppButton>
               <AppButton title="Register"  color={"secondary"}  onPress={()=>console.log("Register is pressed")}></AppButton>
            </View>
            

        </ImageBackground>

        
    );
}

const styles = StyleSheet.create({
    bg :{
        flex: 1,
        justifyContent : "flex-end",
        alignItems:"center"
    },
    btnsContainer:{
        padding : 20, 
        width:"100%"
    }
    ,logos :{ 
        width :100,
        height :60 ,
    },
    logoContainer :{ 
        position: 'absolute', 
        top : 70,
        alignItems: 'center'
        
    }
    
})

export default WelcomeScreen;