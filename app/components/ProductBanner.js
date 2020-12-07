import React from 'react';
import { View, StyleSheet, FlatList,ScrollView,Dimensions,TouchableOpacity,Image} from 'react-native';
import { ApplicationProvider, Layout,Divider, Text,IconRegistry } from '@ui-kitten/components';
import Carousel from 'react-native-snap-carousel';
const sliderWidth = Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;

const styles = StyleSheet.create({
    bannerContainer:{
        flexDirection:'row',
        marginBottom:15
    },
    banner:{

        },
    imgContainer:{
         justifyContent: 'center', 
         alignItems: 'center', 
         height: (sliderWidth - 40) * 0.65,
        },
    img :{ 
        width:(sliderWidth),
        height: (sliderWidth - 40) * 0.65,
        },
})


function ProductBanner({data,onPress}) {
    return (
        <Layout style={styles.bannerContainer}>
        <Carousel
            layout={"default"}
            data={data}
            sliderWidth={sliderWidth-70}
            itemWidth={sliderWidth-50}
            renderItem = {({item})=> 
                <TouchableOpacity style={styles.imgContainer} onPress={()=>onPress(item.id)}>
                    <Image  source={item.image} style={styles.img} resizeMode="stretch" />
                </TouchableOpacity>
            }
            containerCustomStyle={styles.banner}
            autoplay={true}
            autoplayInterval={1000}
            loop={true}
            />
    </Layout>
    );
}

export default ProductBanner;