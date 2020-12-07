import { Layout } from '@ui-kitten/components';
import React from 'react';
import { Image, ImageBackground, StyleSheet,Text, TouchableOpacity, View} from 'react-native';
import appColors from '../config/color'
import AppText from './AppText';

const styles = StyleSheet.create({
    container:{
        height:300,
        flexDirection:'column',

        
    },
    imgContainer:{
        flex:3,
    },
    img:{
        borderRadius:35,
        width:"60%", 
        flex:1,
        alignSelf:'center'
    }
    ,
    tag:{
        marginBottom:10,
        fontWeight:"bold",
        alignSelf:'center'
    }
    ,
    subtitle:{
        color:"dodgerblue",
        alignSelf:'center'
    }, 
    detailsContaner: {
        padding:10,
        width:"100%",
        flex:1,
    }
    
})

function SimpleCard({imgSource, title, subtitle, onPress,promoText,style}) {
    return (
        <TouchableOpacity style={[styles.container,style]} onPress= {onPress} >
            <View style={styles.imgContainer}>
            <Image
                style={styles.img}
                source={imgSource}
            >
            </Image>
            </View>
            <View style= {styles.detailsContaner}>
                <Text  category={'p1'} style= {styles.tag}>{title}</Text>
                <Text  category={'label'} style= {styles.subtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default SimpleCard;

