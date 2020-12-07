import React from 'react';
import { Image ,SafeAreaView,StyleSheet, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import appColors from '../config/color.js';

function ViewImageSCreen(props) {
    return (
        <View style= {styles.container}>

            <View style = {styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={40} color={"white"}></MaterialCommunityIcons>
            </View>
            <View style = {styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={40} color={"white"}></MaterialCommunityIcons>
            </View>
            <Image 
                source = {require('../assets/chair.jpg')} 
                style = {styles.image}
            />
                       
        </View>
        );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor :appColors.bgDark  , 
        flex : 1,
        justifyContent:"flex-end"
    },
    closeIcon: {
        position:"absolute",
        top: 40,
        right: 30
    },
    deleteIcon: {
        position:"absolute",
        top: 40,
        left:30
    },
    image: {
        width : "100%" , 
        height : "85%"
    }
})

export default ViewImageSCreen;