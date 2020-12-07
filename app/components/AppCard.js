import React from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import appColors from '../config/color'
import AppText from './AppText';
import { Layout,Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container:{
        backgroundColor : appColors.bgWhite,
        borderRadius:15,
        margin:10, 
        overflow:"hidden",
        height:300,
        flexDirection:'column',

        shadowColor: appColors.dark,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    img:{
        width:"100%", 
        flex:3,
    }
    ,
    tag:{
    }
    ,
    subtitle:{
        color:"dodgerblue",
        fontWeight:"bold",
    }, 
    detailsContaner: {
        padding:10,
        width:"100%",
        flex:1,
    }
    
})

function AppCard({imgSource, title, subtitle, onPress,promoText,style}) {
    return (
        <TouchableWithoutFeedback style={[styles.container,style]} onPress= {onPress} >
            <Image
                style={styles.img}
                source={imgSource}
            >
            </Image>
            <View style= {styles.detailsContaner}>
                <Text  category={'label'} style= {styles.tag}>{title}</Text>
                <Text  category={'p1'} style= {styles.subtitle}>{subtitle}</Text>
            </View>
            
            
        </TouchableWithoutFeedback>
    );
}

export default AppCard;

