import React from 'react';
import {StatusBar,FlatList ,View,StyleSheet} from 'react-native';
import AppColor from '../config/color';

const styles = StyleSheet.create({
    sep:{
        width: '100%', height:1, backgroundColor: AppColor.light , marginBottom : 10
    }
})
function ListItemSeperator(props) {
    return (
        <View style = {styles.sep}/>
    );
}

export default ListItemSeperator;