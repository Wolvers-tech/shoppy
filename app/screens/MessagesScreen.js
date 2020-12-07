import React , {useState} from 'react';
import {StatusBar,FlatList ,View,StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Constants from 'expo-constants'
import ListItemSeperator from '../components/ListItemSeperator';
import AppText from '../components/AppText';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

 

const initialMessages = [
    {
        id:1, 
        title:'T1', 
        description:'D1',
        image : {uri:'http://lorempixel.com/300/200/people/'}
    },
    {
        id:2, 
        title:'T2', 
        description:'D2',
        image : {uri:'http://lorempixel.com/300/200/people/'}
    },
];
const styles = StyleSheet.create({
    container:{
        paddingTop : Constants.statusBarHeight
    }, 
    msgg:{
        backgroundColor:'red',
        width: 70
    }
})


function MessagesScreen(props) {
    const [messages, SetMessages] = useState(initialMessages);
    const [refreshing, SetRefreshing] = useState(false);
 
    
    const handleDelete = (message) => {
        const newMessages = messages.filter ((m)=> m.id !== message.id); 
        SetMessages(newMessages);
    }
    return (
        <Screen  >
            
            <FlatList 
                data ={messages} 
                keyExtractor = {message => message.id.toString()}
                renderItem = {({item})=> 
                
                <ListItem title= {item.title} count={""} subtitle ={item.description} imgSource = {item.image} 
                    onPress ={()=> {console.log('I am presses',item.title)}} 
                    renderRightActions= { ()=> <ListItemDeleteAction onPress = {()=> handleDelete(item)}></ListItemDeleteAction>}
                >

                </ListItem> 

               
            }
                ItemSeparatorComponent={ ListItemSeperator } 
                refreshing = {refreshing}
                onRefresh = {()=> SetMessages (initialMessages)}
        ></FlatList>
        </Screen>
       
    );
}

export default MessagesScreen;