
import React from 'react';
import { Image, StyleSheet,Text, TouchableOpacity, View} from 'react-native';
import appColors from '../config/color'
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
    container:{
        backgroundColor : appColors.bgWhite,
        marginBottom:10, 
        overflow:"hidden",
        height:300
    },
    img:{
        width:"100%", 
        height: "70%"
    }
    ,
    tag:{
        marginBottom:10,
        fontWeight:"bold",
    }
    ,
    subtitle:{
        color:"dodgerblue"
    }, 
    detailsContaner: {
        padding:10
    }
    
})

function ListDetailScreen(props) {
    return (
        <View  >
            <View style={styles.container} >
                <Image
                    style={styles.img}
                    source={{uri: 'http://lorempixel.com/300/200/technics/'}}
                />
                <View style= {styles.detailsContaner}>
                    <AppText  style= {styles.tag}>{"My Jacket"}</AppText>
                    <AppText  style= {styles.subtitle}>{"$100"}</AppText>
                </View>
            </View>

            <ListItem imgSource= {{uri: 'http://lorempixel.com/400/200/people/'}}
                title = {"Tariq Shatat" }
                count = {"5"}
                onPress = {()=> {console.log ("Card is Cliccked")}}></ListItem>
        </View>
    );
}

export default ListDetailScreen;