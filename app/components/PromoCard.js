import React from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import color from '../config/color';
import appColors from '../config/color';
import AppText from './AppText';
import {Text} from '@ui-kitten/components';
const styles = StyleSheet.create({
    container:{
        margin:10, 
        overflow:"hidden",
        height: 300,
       
    },
    img:{
        width:"100%", 
        height: "100%",
        justifyContent: 'space-between',
        flexDirection:'column-reverse'

    }
    ,
    tag:{
        color:appColors.light,
        marginBottom:2,
        fontWeight:"bold",
    }
    ,
    subtitle:{
        color:appColors.bglight
    }, 
    detailsContaner: {
        width:'100%',
        padding:10,
        backgroundColor:appColors.darkOverlay,
        
    },
    promoContainer:{
        backgroundColor: appColors.darkOverlay,
        width:50,
        height:50,
        marginTop:15,
        marginRight:15,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center', 
        alignSelf:'flex-end' 
    }
   
    
})

function PromoCard({imgSource, title, subtitle,promoText, onPress,style}) {
    return (
        <TouchableOpacity style={[styles.container,style]} onPress= {onPress} >
            <ImageBackground
                style={styles.img}
                source={imgSource}>
               
                <View style= {styles.detailsContaner}>
                    <Text  category={'p1'} style= {styles.tag}>{title}</Text>
                    <Text  category={'label'} style= {styles.subtitle}>{subtitle}</Text>
                </View>

                {promoText && <View style= {styles.promoContainer}>
                    <Text category={'label'}  style= {styles.tag }>{promoText}</Text>
                </View>}
            </ImageBackground>
            
        </TouchableOpacity>
    );
}

export default PromoCard;

