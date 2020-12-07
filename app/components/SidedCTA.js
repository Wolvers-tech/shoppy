import React from 'react';
import { View, StyleSheet, FlatList,ScrollView,Dimensions,TouchableOpacity,Image} from 'react-native';
import { ApplicationProvider, Layout,Divider, Text,IconRegistry,Icon } from '@ui-kitten/components';
import Carousel from 'react-native-snap-carousel';
import appColors from '../config/color';
const sliderWidth = Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;



const styles = StyleSheet.create({
   container:{
    width :"100%",
    height:60,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection:'row'
   },
    leftSide:{
        backgroundColor:appColors.secondary,
       
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    },
    rightSide:{
        backgroundColor:appColors.primary,
        flex:2,
        flexDirection:"row-reverse",
        alignItems:'center',
        },
    title:{
        color:'black',
        },
    subTitle:{
        color:'black',
        
        fontWeight:'bold'
    },
    ctaTitle:{
        color:'white',
    },
    ctaIcon:{
        margin:10,
        width:35, 
        height:35
    }  

})


function SidedCTA({infoTitle,infoSubTitle,ctaTitle,ctaIconName,onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Layout style={styles.leftSide}>
                <Text category="s1" style={styles.title}> {infoTitle} </Text>
                <Text category="h6" style={styles.subTitle}> {infoSubTitle} </Text>
            </Layout>
            <Layout style={styles.rightSide}>
                <Icon name={ctaIconName} fill='black' style={styles.ctaIcon}></Icon>
                <Text category="h6" style={styles.ctaTitle}>{ctaTitle}</Text>
            </Layout>
        </TouchableOpacity>
    );
}

export default SidedCTA;