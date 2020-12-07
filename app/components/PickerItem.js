import React from 'react';
import { Image, StyleSheet,Text, TouchableHighlight, View} from 'react-native';
import appColors from '../config/color'
import AppText from './AppText';
import {RectButton, Swipeable} from 'react-native-gesture-handler';
import AppIcon from './AppIcon';
import { TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    container:{
        flexDirection :"row",
        margin:5, 
        alignContent:"center",
        
    },
    img:{
        width:70, 
        borderRadius:40,
    }
    ,
    tag:{
        fontWeight:"bold",
    }
    ,
    subtitle:{
        color:"grey"
    }, 
    detailsContaner: {
        margin:5
    },
    

})

function PickerItem({imgSource, title ,subtitle, IconComponent , onPress}) {
    return (
            <TouchableOpacity  underlayColor={appColors.light} onPress= {onPress} >
                <View style={styles.container}>
                    { imgSource && <Image
                        style={styles.img}
                        source={imgSource}
                    />}
                    {IconComponent}
                    <View style= {styles.detailsContaner}>
                        <AppText  style= {styles.tag}>{title}</AppText>
                        {subtitle && <AppText  style= {styles.subtitle}>{subtitle}</AppText>}
                    </View>
                </View>
                
                
            </TouchableOpacity>
    );
}


export default PickerItem;