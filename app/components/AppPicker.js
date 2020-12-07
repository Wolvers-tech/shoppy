import { StatusBar } from 'expo-status-bar';
import React , {useReducer, useState} from 'react';
import { StyleSheet, View ,} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from '../components/AppText'
import appColors from '../config/color'
import { TextInput } from 'react-native';
import color from '../config/color';
import AppTextInput from './AppTextInput';
import { TouchableWithoutFeedback } from 'react-native';
import { Modal } from 'react-native';
import { Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from './ListItem';
import PickerItem from './PickerItem';


const styles = StyleSheet.create({
    container : {
        padding : 15,
        width : "100%",
        flexDirection: "row", 
        borderWidth:0.5,
        alignItems: "center",
        backgroundColor: appColors.light
        //justifyContent:"center"
    },
    textInput :{
        fontSize : 18,
        marginLeft :5, 
        color : color.dark
    }

})

function AppPicker({icon ,placeholder,items, onSelectITem,selectedItem, ...otherpop} ) {

    const [modalV, setModalV] = useState(false);
    return (
        <React.Fragment> 
        <TouchableWithoutFeedback onPress = {()=> {setModalV(true)}}>
            <View style = {[styles.container ]}>
                {icon && <MaterialCommunityIcons name= {icon} size ={20 } color= {appColors.bglight}></MaterialCommunityIcons>}
                <AppText style={{flex:1}}> {selectedItem? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons  name= {"chevron-down"} size ={20 } color= {appColors.bglight}></MaterialCommunityIcons>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible = {modalV} animationType = {"slide"}>
            <Button title = "close" onPress= {()=> setModalV(false)}> </Button>
            <FlatList
             data = {items} 
             keyExtractor = {(item)=> item.value}
             renderItem = { 
                 ({item}) =>  
                    <PickerItem 
                    title ={item.label} 
                    onPress = {()=> {
                         onSelectITem(item) ;
                        setModalV(false); 
                        }}> </PickerItem> }
            > </FlatList>
        </Modal>
        </React.Fragment>
        
        
    );
}

export default AppPicker;