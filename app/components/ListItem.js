import React from 'react';
import { Image, StyleSheet,Text, TouchableHighlight, View} from 'react-native';
import appColors from '../config/color'
import AppText from './AppText';
import {RectButton, Swipeable} from 'react-native-gesture-handler';
import AppIcon from './AppIcon';


const styles = StyleSheet.create({
    container:{
        flexDirection :"row",
        margin:10, 
        alignContent:"center",
        
    },
    img:{
        width:70, 
        borderRadius:40,
    }
    ,
    tag:{
        marginBottom:5,
        fontWeight:"bold",
    }
    ,
    subtitle:{
        color:"grey"
    }, 
    detailsContaner: {
        margin:10
    },
    

})

function ListItem({imgSource, title, count="", icon ,subtitle, IconComponent , onPress, renderRightActions}) {
    return (
        <Swipeable  renderRightActions= {renderRightActions}>

            <TouchableHighlight  underlayColor={appColors.light} onPress= {onPress} >
                <View style={styles.container}>
                    { imgSource && <Image
                        style={styles.img}
                        source={imgSource}
                    />}
                    {IconComponent}
                    <View style= {styles.detailsContaner}>
                        <AppText  style= {styles.tag}>{title}</AppText>
                        {subtitle && <AppText  style= {styles.subtitle}>{count + " "+ subtitle}</AppText>}
                    </View>
                </View>
                
                
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;

