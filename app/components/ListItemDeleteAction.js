import React from 'react';
import { Image, StyleSheet,Text, TouchableHighlight, View} from 'react-native';
import appColors from '../config/color' ;
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    rightSwipe:{
        backgroundColor: appColors.danger, 
        width : "20%", 
        justifyContent:"center", 
        alignItems:"center"
     }
})


function ListItemDeleteAction({onPress}) {
    return (
      <TouchableWithoutFeedback onPress= {onPress}>

        <View style= {styles.rightSwipe}> 
            <MaterialCommunityIcons name= {"trash-can"} size ={25} color = {appColors.light}></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
    );
}

export default ListItemDeleteAction;


