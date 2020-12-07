import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './AccountScreen';
import {DetailsScreen} from './details.component'

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Profile' component={AccountScreen}/>
    <Screen name='Wallet' component={DetailsScreen}/>
    <Screen name='Address' component={DetailsScreen}/>
    <Screen name='Language' component={DetailsScreen}/>
    <Screen name='Orders' component={DetailsScreen}/>
    <Screen name='ChangePassword' component={DetailsScreen}/>
  </Navigator>
);

function ProfileNavigator(props) {

    return (
        <HomeNavigator/>
    );
}

export default ProfileNavigator;