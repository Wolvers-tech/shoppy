import React from 'react';
import { StyleSheet, View ,} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const styles = StyleSheet.create({
container : {
    justifyContent:"center", 
    alignItems:"center"
}
})


function AppIcon({name, size=50, fColor="grey", bColor="white"}) {
    return (
        <View style= {[styles.container, {backgroundColor:bColor, width : size , height : size, borderRadius: size/2}]}> 
            <MaterialCommunityIcons name= {name} size ={size/2 } color= {fColor}></MaterialCommunityIcons>
        </View>

    );
}

export default AppIcon;