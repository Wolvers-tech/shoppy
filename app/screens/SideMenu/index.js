import React from 'react';
import { StyleSheet,ImageBackground} from 'react-native';
import AccountScreen from '../Profile/AccountScreen';
import AppNavigator from '../AppNavigator';
import FavScreen from '../Favourites/FavScreen';
import CartScreen from '../Cart/CartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem,Divider, Layout, Text, IndexPath,Icon } from '@ui-kitten/components';

const { Navigator, Screen } = createDrawerNavigator();

const HomeICon = (props) => (
    <Icon {...props} name='home-outline'/>
  );
  
  const StarIcon = (props) => (
    <Icon {...props} name='star-outline'/>
  );
  
  const CartIcon = (props) => (
    <Icon {...props} name='shopping-cart-outline'/>
  );
  
const PersonIcon = (props) => (
    <Icon {...props} name='person-outline'/>
  );

  const ForwardIcon = (props) => (
    <Icon {...props} name='arrow-ios-forward'/>
  );
  
  const Header = (props) => (
    <React.Fragment>
      <ImageBackground
        style={[props.style, styles.header]}
        source={{uri: 'http://lorempixel.com/300/200/fashion/'}}
      />
      <Divider/>
    </React.Fragment>
  );
  

const DrawerContent = ({ navigation, state }) => (
    <Drawer
        header={Header}
        selectedIndex={ state.index}
        onSelect={index => navigation.navigate(state.routeNames[index.row])}>
        <DrawerItem style={{color: 'red'}} title='Home' accessoryLeft={HomeICon}
        accessoryRight={ForwardIcon}/>
        <DrawerItem title='Favourites' accessoryLeft={StarIcon}
        accessoryRight={ForwardIcon}/>
        <DrawerItem title='Cart' accessoryLeft={CartIcon}
        accessoryRight={ForwardIcon}/>
        <DrawerItem title='Profile' accessoryLeft={PersonIcon}
        accessoryRight={ForwardIcon}/>
    </Drawer>
);

const DrawerNavigator = () => (

 <Navigator drawerContent={props => <DrawerContent {...props}/>}>
    <Screen name="Home" component={AppNavigator} />
    <Screen name="Favourites" component={FavScreen} />
    <Screen name="Cart" component={CartScreen} />
    <Screen name="Profile" component={AccountScreen} />
 </Navigator>
);


function SideNavigator(props) {

    return (
        <DrawerNavigator/>
   );
}

const styles = StyleSheet.create({
    header: {
        height: 128,
        flexDirection: 'row',
        alignItems: 'center',
      },
})
export default SideNavigator;

