import React from 'react';
import { View, StyleSheet, FlatList,ScrollView,Dimensions,TouchableOpacity,Image} from 'react-native';
import AppCard from '../../components/AppCard';
import PromoCard from '../../components/PromoCard';
import { ApplicationProvider, Layout,Divider, Text,IconRegistry } from '@ui-kitten/components';
import Header from '../../components/Layout/Header';
import Screen from '../../components/Screen'
import appColors from '../../config/color';
import Seeds from '../../seeds/';
import { PropsService } from '@ui-kitten/components/devsupport';
import SliderBanner from '../../components/SliderBanner';
import SimpleCard from '../../components/SimpleCard';



const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    screen : {
        backgroundColor :appColors.bgWhite , 
        padding:20, 
        paddingTop:50
    },
    sectionTitle:{ 
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:'100%'
    },
    DealsContainer:{
        marginTop:10,
    },
    
})

function HomeScreen({ navigation,route }) {
    console.log(Seeds)
    return (
        <Screen style= {styles.screen}>
            <Header navigation={navigation}></Header>
            <ScrollView>
            <SliderBanner data = {Seeds.banners} onPress={(item) => console.log(item)}></SliderBanner>
            <Divider></Divider>
            <Layout style={styles.DealsContainer}>
                <Layout style={styles.sectionTitle}>
                    <Text  category='h6' status='basic'>Explore by Categories</Text>
                    <Text  status='primary'>View All</Text>
                </Layout>
                <FlatList 
                    data= {Seeds.categories} horizontal= {true} 
                    keyExtractor = {(item)=>item.id.toString()}
                    renderItem = {({item})=> 
                        <SimpleCard style = {{width:100, height:100}} imgSource= {item.image}
                            title = {item.title} onPress={()=>navigation.navigate('Category',{...item})}
                        >
                        </SimpleCard>
                }
                ></FlatList>
            </Layout>
            <Divider></Divider>
            <Layout style={styles.DealsContainer}>
                <Layout style={styles.sectionTitle}>
                    <Text  category='h6' status='basic'>Top Deals</Text>
                    <Text  status='primary'>View All</Text>
                </Layout>
                <FlatList 
                    data= {Seeds.deals} horizontal= {true} 
                    keyExtractor = {(item)=>item.id.toString()}
                    renderItem = {({item})=> 
                        <PromoCard style = {{width:150, height:200}} imgSource= {item.image}
                            title = {item.title}
                            subtitle = {item.subtitle}
                            promoText= {"25% off"}
                            onPress={()=>navigation.navigate('Category',{...item})}
                        >
                        </PromoCard>
                }
                ></FlatList>
            </Layout>
            <Divider></Divider>
            <Layout style={styles.DealsContainer}>
                <Layout style={styles.sectionTitle}>
                    <Text  category='h6' status='basic'>Products</Text>
                    <Text  status='primary'>View All</Text>
                </Layout>
                
                <FlatList 
                    data= {Seeds.topProducts} numColumns={Math.floor((screenWidth-80)/165)}
                    keyExtractor = {(item)=>item.id.toString()}
                    renderItem = {({item})=> 
                        <AppCard style = {{width:165, height:200}} imgSource= {item.image}
                            title = {item.title}
                            subtitle = {item.subtitle}
                            promoText= {"25% off"}
                            onPress={()=>navigation.navigate('Product',{...item})}
                        >
                        </AppCard>
                }
                ></FlatList>
            </Layout>
            <Divider></Divider>
            </ScrollView>
      </Screen>
        
    );
}

export default HomeScreen;