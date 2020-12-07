import React from 'react';
import {StatusBar,FlatList ,View,StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants'


const styles = StyleSheet.create({
    screen:{
        paddingTop : Constants.statusBarHeight, 
        flex : 1
    }
})



function Screen({children,style}) {
    return (
        <View  style={[styles.screen, style]}>
            {children}
        </View>
    );
}

export default Screen;
