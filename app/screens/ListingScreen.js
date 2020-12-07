import { FlexStyleProps } from '@ui-kitten/components/devsupport';
import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import AppCard from '../components/AppCard';
import PromoCard from '../components/PromoCard';
import Screen from '../components/Screen'
import appColors from '../config/color'


const listingItems = [
    {
        id:1,
        title: "first item",
        subtitle :"$100", 
        image : {uri: 'https://picsum.photos/300/200'}

    },
    {
        id:2,
        title: "second item",
        subtitle :"$200", 
        image : {uri:'http://lorempixel.com/300/200/people/'}

    },
    {
        id:3,
        title: "third item",
        subtitle :"$300", 
        image : {uri: 'https://picsum.photos/300/200'}
    },
]
const styles = StyleSheet.create({
    screen : {
        backgroundColor :appColors.light , 
        padding:20, 
        paddingTop:50
    }
})

function ListingScreen(props) {
    return (
        <Screen style= {styles.screen}>
            <FlatList 
                data= {listingItems} horizontal= {true} 
                keyExtractor = {(item)=>item.id.toString()}
                renderItem = {({item})=> 
                    
                    <AppCard style = {{width:200}} imgSource= {item.image}
                        title = {item.title}
                        subtitle = {item.subtitle}
                        promoText= {"hello"}
                    >
                    </AppCard>
                    
            }
            ></FlatList>
            
      </Screen>
    );
}

export default ListingScreen;