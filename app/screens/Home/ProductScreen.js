import React  ,{useState}from 'react';
import { View, StyleSheet, FlatList,ScrollView,Dimensions,TouchableOpacity,Image} from 'react-native';
import AppCard from '../../components/AppCard';
import PromoCard from '../../components/PromoCard';
import { ApplicationProvider, Layout,Divider, Text,IconRegistry ,Button} from '@ui-kitten/components';
import Header from '../../components/Layout/Header';
import Screen from '../../components/Screen'
import appColors from '../../config/color'
import { PropsService } from '@ui-kitten/components/devsupport';
import ProductBanner from '../../components/ProductBanner';
import SimpleCard from '../../components/SimpleCard';
import Seeds from '../../seeds/';
import ProductCard from '../../components/ProductCard';
import SimpleHeader from '../../components/Layout/SimpleHeader';
import SidedCTA from '../../components/SidedCTA';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import SetQuantity from '../../components/Layout/SetQuantity';
const screenWidth = Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  itemsContainer:{
    marginTop:10,
    padding:10,
},
lineText:{ 
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'100%',
    alignItems:'center'
},
detailsContainer:{

},
bold:{
fontWeight:'bold',
}
})

const discription= "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaa bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaa bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaa bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaa bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bbla bla bla bla bla bla bla bla bla bla bla bla bla bbla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blala bla bla bla bla bla bla bla bla blala bla bla bla bla bla bla bla bla bla ";

function ProductScreen({navigation,route}) {
    
    const [count , setCount] = useState(1);
    const product= route.params;
    console.log(route.params);
    return (
        <Layout style={styles.container} >
        <SimpleHeader  navigation={navigation} title = {product.title} BackAction_={true}></SimpleHeader>
        <ScrollView>
         <ProductBanner data = {Seeds.topProducts} onPress={(item) => console.log(item)}></ProductBanner>
         <Divider></Divider>
         <Layout style={styles.itemsContainer}>              
             <Text category='h6' style={styles.bold}>{product.title}</Text>
             <Text category='h6' status='info' style={styles.bold}>{product.subtitle}</Text>
             <Layout style={styles.lineText}>
                <Text category='p1'   >Quantity:</Text>
                <SetQuantity min ={1} count= {count} setCount={setCount} ></SetQuantity>
             </Layout>
             <Text category='p1'   >{discription}</Text>
             
        </Layout>
      </ScrollView>
      <SidedCTA 
                infoTitle={"Items"}
                infoSubTitle={"$700"} 
                ctaTitle= "Add to cart"
                ctaIconName= 'shopping-cart-outline'
                onPress={(()=>Seeds.cartProducts.push(product))}
            ></SidedCTA>
   </Layout>
    );
}

export default ProductScreen;