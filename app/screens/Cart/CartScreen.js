import React ,{useState} from 'react';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
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
import ProductCard from '../../components/ProductCard';
import SimpleHeader from '../../components/Layout/SimpleHeader';
import CartCard from '../../components/CartCard';
import SidedCTA from '../../components/SidedCTA';
import Seeds from '../../seeds/';

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  itemsContainer:{
    marginTop:10,
    flex:7
},
  sectionTitle:{ 
    marginBottom:3,
    paddingHorizontal:10,
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'100%'
  },
  line:{ 
    marginBottom:3,
    paddingHorizontal:10,
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'100%'
  },
  BottomContainer:{
    flexDirection:'column',
    height:130, 
  }
})
const screenWidth = Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;



function CartScreen({navigation}) {
  const [cartProducts , setCartProducts] = useState([]);
  const [count , setCount] = useState(0);

  const clearCart =()=>{
    Seeds.cartProducts.clearCart();
    var items= Seeds.cartProducts.getProducts();
    setCartProducts(items);
    setCount( Seeds.cartProducts.count());
  }

  useFocusEffect(
    React.useCallback(() => {
      var items= Seeds.cartProducts.getProducts();
      setCartProducts(items);
      setCount( Seeds.cartProducts.count()); 
      
      }, [])
    );
    return (
        <Layout  style={styles.container}>
         <SimpleHeader navigation={navigation} title = "My Cart" ></SimpleHeader>
        <Divider></Divider>
        <Layout style= {styles.sectionTitle}>
              <Text  category='h6' status='basic'>({count})Item</Text>
              <Text  status='danger' onPress={clearCart}>Clear Cart</Text>
        </Layout>
        
        <Layout style={styles.itemsContainer}>              
                <FlatList style= {{backgroundColor:appColors.bgWhite}}
                    data= {cartProducts}
                    keyExtractor = {(item)=>item.product.id.toString()}
                    renderItem = {({item})=> 
                        <CartCard style = {{width:"95%", height:100}} imgSource= {item.product.image}
                            title = {item.product.title}
                            price = {item.product.price}
                            promoText= {"25% off"} 
                            horizontal= {true}
                            initialCount = {item.count}
                            onPress = {()=> {}}
                        >
                        </CartCard>
                }
                ></FlatList>
         </Layout>
         
         {cartProducts.length>0&&<Layout style={styles.BottomContainer}>  
          <Layout style={styles.line}>
              <Text >SubTotal (3 Items)</Text>
              <Text >$525.00</Text>
          </Layout>
          <Layout style={styles.line}>
              <Text >Delivery Charges</Text>
              <Text >1525.00</Text>
          </Layout>
          <Layout style={styles.line}>
              <Text >SubTotal (3 Items)</Text>
              <Text >$525.00</Text>
          </Layout>
          <SidedCTA 
              infoTitle={`Total`}
              infoSubTitle={`$${Seeds.cartProducts.total()}`} 
              ctaTitle= "Checkout"
              ctaIconName= 'arrow-forward-outline'
              onPress={(()=>console.log(Seeds.cartProducts))}>
          </SidedCTA>
         </Layout>
          }
      </Layout>
    );
}

export default CartScreen;