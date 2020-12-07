import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text ,Icon } from '@ui-kitten/components';
import { startClock } from 'react-native-reanimated';
import ProfileNavigator from './Profile';
import HomeScreenNavigator from './Home';
import FavScreen from './Favourites/FavScreen';
import CartNavigator from './Cart';
const { Navigator, Screen } = createBottomTabNavigator();

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



const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={ state.index}
    onSelect={index =>{console.log(index); navigation.navigate(state.routeNames[index])}}>
    <BottomNavigationTab title='Home' icon={HomeICon}/>
    <BottomNavigationTab title='Favourites' icon={StarIcon}/>
    <BottomNavigationTab title='Cart' icon={CartIcon}/>
    <BottomNavigationTab title='Profile' icon={PersonIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home'  component={HomeScreenNavigator}/>
    <Screen name='Favourites' component={FavScreen}/>
    <Screen name='Cart'  component={CartNavigator}/>
    <Screen name='Profile' component={ProfileNavigator}/>
  </Navigator>
);


function AppNavigator(props) {

    return (
        <TabNavigator/>
    );
}

export default AppNavigator;