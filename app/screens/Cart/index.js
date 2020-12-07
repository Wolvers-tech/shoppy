import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {DetailsScreen} from '../Profile/details.component'
import CartScreen from './CartScreen';

const { Navigator, Screen } = createStackNavigator();

const CartNavigatorComponent = () => (
  <Navigator headerMode='none'>
    <Screen name='Cart' component={CartScreen}/>
    <Screen name='Checkout' component={DetailsScreen}/>
    <Screen name='Payment' component={DetailsScreen}/>
  </Navigator>
);

function CartNavigator(props) {

    return (
        <CartNavigatorComponent/>
    );
}

export default CartNavigator;