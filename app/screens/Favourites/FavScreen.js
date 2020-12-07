import React from 'react';
import { View, StyleSheet, FlatList,ScrollView,Dimensions,TouchableOpacity,Image} from 'react-native';
import AppCard from '../../components/AppCard';
import PromoCard from '../../components/PromoCard';
import { ApplicationProvider, Layout,Divider, Text,IconRegistry } from '@ui-kitten/components';
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
})
function FavScreen({navigation}) {
    return (
        <Layout style={styles.container}>
           <SimpleHeader title = "Favourites"></SimpleHeader>
           <Divider></Divider>
            <Layout style={styles.itemsContainer}>              
                <FlatList style= {{backgroundColor:appColors.bgWhite}}
                    data= {Seeds.favouriteProducts} numColumns={Math.floor((screenWidth-80)/165)}
                    keyExtractor = {(item)=>item.id.toString()}
                    renderItem = {({item})=> 
                        <ProductCard style = {{width:165, height:200}} imgSource= {item.image}
                            title = {item.title}
                            price = {item.price}
                            promoText= {"25% off"} 
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

export default FavScreen;