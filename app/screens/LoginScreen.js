import React, {useState} from 'react';
import {StyleSheet, View ,FlatList,Image} from 'react-native';
import ListItem from '../components/ListItem';
import appColors from '../config/color'
import Screen from '../components/Screen'
import AppIcon from '../components/AppIcon';
import ListItemSeperator from '../components/ListItemSeperator';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton'
import {Formik} from 'formik'
const styles = StyleSheet.create({
    logo: {
        width: "70%" , 
        alignSelf: 'center',
        marginTop:50,
        marginBottom:20,
    }
})


function LoginScreen(props) {


    return (
        <Screen>
            <Image source = {require('../assets/logo.png')} style= {styles.logo} resizeMode="contain"></Image>
            <Formik
            initialValues={{email:'', password:''}}
            onSubmit = {values=> console.log(values)}
            >
              {
                  ({handleChange,handleSubmit}) => (
                <>
            <AppTextInput
              autoCapitalize ="none" autoCorrect = {false}  KeyboardType="email-address" textContentType="emailAddress" icon = "email" 
              placeholder="Email"
              onChangeText = {handleChange("email")}
              />
             <AppTextInput onChangeText = {handleChange("password")}
              autoCapitalize ="none" autoCorrect = {false}   textContentType="password" secureTextEntry  icon = "lock" placeholder="Password" />
            <AppButton title= "Login" onPress={handleSubmit}></AppButton>
                </>
            )
              }  
            </Formik>
            
            
        </Screen>
    );
}

export default LoginScreen;