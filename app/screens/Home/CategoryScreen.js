import React from 'react';
import { View, StyleSheet, FlatList,ScrollView,Dimensions,TouchableOpacity,Image} from 'react-native';
import AppCard from '../../components/AppCard';
import PromoCard from '../../components/PromoCard';
import { ApplicationProvider, Layout,Divider, Text,IconRegistry ,Button} from '@ui-kitten/components';
import Header from '../../components/Layout/Header';
import Screen from '../../components/Screen'
import appColors from '../../config/color'
import { PropsService } from '@ui-kitten/components/devsupport';
import SliderBanner from '../../components/SliderBanner';
import SimpleCard from '../../components/SimpleCard';
import Seeds from '../../seeds/';
import ProductCard from '../../components/ProductCard';
import SimpleHeader from '../../components/Layout/SimpleHeader';
import SidedCTA from '../../components/SidedCTA';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const screenWidth = Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  itemsContainer:{
    marginTop:10,
    flex:2,
},
filterTab:{
    height:25,
    marginHorizontal:10,
},
filterTabContainer:{
    height:50,
    padding:10,
}
})


function CategoryScreen({navigation,route}) {
    const products= route.params.products;
    console.log(products);
    return (
        <Layout style={styles.container} >
           <SimpleHeader  navigation={navigation} title = {route.params.title} BackAction_={true}></SimpleHeader>
           <Divider></Divider>
           <Layout style={styles.filterTabContainer}>    
            <FlatList 
                data= {products} horizontal= {true} 
                keyExtractor = {(item)=>item.id.toString()}
                renderItem = {({item})=> 
                    <Button style={styles.filterTab} size={'small'} status={'basic'} >{item.title}</Button>
            }
                ></FlatList>
           </Layout>
            <Divider></Divider>
            <Layout style={styles.itemsContainer}>              
                <FlatList style= {{backgroundColor:appColors.bgWhite}}
                    data= {products} numColumns={Math.floor((screenWidth-80)/165)}
                    keyExtractor = {(item)=>item.id.toString()}
                    renderItem = {({item})=> 
                        <ProductCard product= {item} style = {{width:165, height:200}} imgSource= {item.image}
                            title = {item.title}
                            price = {item.price}
                            onPress={()=>navigation.navigate('Product',{...item})}
                        >
                        </ProductCard>
                }
                ></FlatList>
            </Layout>
            <SidedCTA 
              infoTitle={"Items"}
              infoSubTitle={"$700"} 
              ctaTitle= "Go To Cart"
              ctaIconName= 'shopping-cart-outline'
              onPress={(()=>navigation.navigate("Cart"))}
         ></SidedCTA>
      </Layout>
    );
}

export default CategoryScreen;