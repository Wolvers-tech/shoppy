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
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#FFF',
        },
    imgContainer:{
         justifyContent: 'center', 
         alignItems: 'center', 
         height: screenHeight / 6.7
        },
    img :{ 
        width:(sliderWidth),
        height: (sliderWidth - 40) * 0.35,
         borderRadius: 15 
        }
})


function SliderBanner({data,onPress}) {
    return (
        <Layout style={styles.bannerContainer}>
        <Carousel
            layout={"default"}
            data={data}
            sliderWidth={sliderWidth-60}
            itemWidth={sliderWidth-20}
            renderItem = {({item})=> 
                <TouchableOpacity style={styles.imgContainer} onPress={()=>onPress(item.id)}>
                    <Image source={item.banner} style={styles.img} resizeMode="contain" />
                </TouchableOpacity>
            }
            containerCustomStyle={styles.banner}
            autoplay={true}
            autoplayInterval={5000}
            loop={true}
            />
        
    </Layout>
    );
}

export default SliderBanner;