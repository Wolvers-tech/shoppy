import React,{useState} from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import appColors from '../config/color'
import AppText from './AppText';
import { Button, Icon, Layout,Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
    container:{
        margin:10, 
        overflow:"hidden",
        height:300,
        flex : 1,
        flexDirection:'row',
        shadowColor: appColors.dark,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 5,
    },
    imgContainer:{
        flex:4,
  

    },
    img:{
        flex:1,
    }
    ,
    tag:{
        marginBottom:20,
    }
    ,
    subtitle:{
        color:"dodgerblue",
        fontWeight:"bold",
    }, 
    detailsContaner: {
        padding:5,
        width:"100%",
        flex:4,
        marginBottom:10,
        justifyContent:'center',
    },
    counterContaner:{
        borderRadius:15,
        backgroundColor:appColors.light,
        width:"100%",
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
        flexDirection:'column'    
    },
    
    
})

function CartCard({imgSource, title, price, onPress,initialCount=0,style}) {
    const [count , setCount] = useState(initialCount);
    return (
        <TouchableOpacity style={[styles.container,style]} onPress= {onPress} >
             <Layout style= {styles.imgContainer}>
                <Image style={styles.img} source={imgSource} >
                </Image>
             </Layout>
            <Layout style= {styles.detailsContaner}>
                <Text  category={'h6'} style= {styles.tag}>{title}</Text>
                <Text  category={'p1'} style= {styles.subtitle}>${price}</Text>
            </Layout>
            <Layout style = {{flex:1, padding:5}}>
                {(count!=0) &&
                 <Layout style={styles.counterContaner}>
                     <Button style={styles.button} status='primary' size={'small'} onPress={() => setCount(count + 1)} >+</Button>
                    <Text category={'h5'}> {count}</Text>
                    <Button status='warning' size={'small'}  onPress={() => setCount(count - 1)} disabled={(count>1) ?false:true}>-</Button>
                </Layout>}
            </Layout>
            
            
        </TouchableOpacity>
    );
}

export default CartCard;

