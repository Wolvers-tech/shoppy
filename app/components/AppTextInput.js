import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, View ,} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from '../components/AppText'
import appColors from '../config/color'
import { TextInput } from 'react-native';
import color from '../config/color';



const styles = StyleSheet.create({
    container : {
        padding : 15,
        width : "95%",
        flexDirection: "row", 
        borderWidth:0.5,
        alignItems: "center",
        backgroundColor: appColors.light,
        borderRadius:15,
        margin:10,
        alignSelf:'center'

    },
    textInput :{
        fontSize : 18,
        marginLeft :5, 
        color : color.dark,
        flex:1
    }

})

function AppTextInput({icon , ...otherpop} ) {


    return (
        <View style = {[styles.container ]}>
            {icon && <MaterialCommunityIcons name= {icon} size ={20 } color= {appColors.bglight}></MaterialCommunityIcons>}
            <TextInput style = {styles.textInput} {...otherpop}
            ></TextInput>
        </View>
    );
}

export default AppTextInput;