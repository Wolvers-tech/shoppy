import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {DetailsScreen} from '../Profile/details.component'
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import ProductScreen from './ProductScreen';
const { Navigator, Screen } = createStackNavigator();

const HomeNavigatorComponent = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Category' component={CategoryScreen}/>
    <Screen name='Product' component={ProductScreen}/>
  </Navigator>
);

function HomeNavigator(props) {

    return (
        <HomeNavigatorComponent/>
    );
}

export default HomeNavigator;