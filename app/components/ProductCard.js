import React,{useState} from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import appColors from '../config/color'
import AppText from './AppText';
import { Button, Layout,Text } from '@ui-kitten/components';
import SetQuantity from './Layout/SetQuantity';
import seeds from '../seeds';

const styles = StyleSheet.create({
    container:{
        backgroundColor : appColors.bgWhite,
        borderRadius:15,
        margin:10, 
        overflow:"hidden",
        height:300,
        flex : 1,
        flexDirection:'column',

        shadowColor: appColors.dark,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    img:{
        width:"100%", 
        flex:3,
    }
    ,
    tag:{
    }
    ,
    subtitle:{
        color:"dodgerblue",
        fontWeight:"bold",
    }, 
    detailsContaner: {
        padding:5,
        width:"100%",
        flex:1,
        marginBottom:10
    },
    counterContaner:{
        
        backgroundColor:appColors.light,
        width:"100%",
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        
    }
    
})


function ProductCard({imgSource, title, price, onPress,initialCount=0,style,product}) {
    const [count , setCount] = useState(initialCount);
    return (
        <TouchableOpacity style={[styles.container,style]} onPress= {onPress} >
            <Image style={styles.img} source={imgSource} >
            </Image>
            <Layout style= {styles.detailsContaner}>
                <Text  category={'label'} style= {styles.tag}>{title}</Text>
                <Text  category={'p1'} style= {styles.subtitle}>${price}</Text>
            </Layout>
            <Layout >
                {(count==0) &&
                 <Button onPress={() => {
                    seeds.cartProducts.addProductToCart(product); 
                    setCount(count + 1)
                     }}>
                    Add
                </Button>}
                {(count!=0) && <SetQuantity count= {count} setCount={setCount} ></SetQuantity>
                 }
            </Layout>
            
            
        </TouchableOpacity>
    );
}

export default ProductCard;

