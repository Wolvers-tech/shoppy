import React from 'react';
import {StyleSheet, View ,FlatList, ScrollView} from 'react-native';
import ListItem from '../../components/ListItem';
import appColors from '../../config/color';
import Screen from '../../components/Screen'
import AppIcon from '../../components/AppIcon';
import ListItemSeperator from '../../components/ListItemSeperator';
import Seeds from '../../seeds/';


const styles = StyleSheet.create({
    contaner:{
        marginVertical :20,
        backgroundColor:appColors.bgWhite
    }, 
    screen :{
        backgroundColor:appColors.light
    }

})


function AccountScreen({navigation}) {
    return (
        <Screen style = {styles.screen}>
             <ScrollView>         
                <View style = {styles.contaner}> 
                    <ListItem title = {"Tariq Shatat"} 
                            subtitle = {"tariq.s.shatat@gmail.com"} 
                            imgSource =  {{uri:'http://lorempixel.com/300/200/people/'}}
                    ></ListItem>
                </View>
                <View style = {styles.contaner}>
                    <FlatList
                        data = {Seeds.menuItems} 
                        keyExtractor = {(menuItem) => menuItem.title}
                        renderItem = {({item}) => (
                            <ListItem title = {item.title} onPress={()=>navigation.navigate(item.Component)}
                            IconComponent = {<AppIcon name = {item.icon.name} bColor= {item.icon.bColor}></AppIcon>}
                            >
                            </ListItem>
                        )}
                        ItemSeparatorComponent = {ListItemSeperator}
                    ></FlatList>
                </View>
                <View style = {styles.contaner}> 
                <ListItem title = {"Log Out"} 
                            IconComponent = {<AppIcon name = {"logout"} ></AppIcon>}
                            >
                            </ListItem>
                </View>
            </ScrollView>
      </Screen>
    );
}

export default AccountScreen;