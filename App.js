import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { TextInput, View,Image ,Button } from 'react-native';
import AppText from './app/components/AppText';
import AccountScreen from './app/screens/Profile/AccountScreen'
import ListingScreen from './app/screens/ListingScreen';
import HomeNavigator from './app/screens/AppNavigator';
import Screen from './app/components/Screen'
import AppTextInput from './app/components/AppTextInput';
import { Switch } from 'react-native';
import AppPicker from './app/components/AppPicker';
import { TouchableOpacity } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import PromoCard from './app/components/PromoCard';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Layout, Text,IconRegistry } from '@ui-kitten/components';
import SideNavigator from './app/screens/SideMenu/index'
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
 

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider  {...eva} theme={eva.light}>
      <NavigationContainer>
          <SideNavigator></SideNavigator>
      </NavigationContainer>
       
      </ApplicationProvider>
    </>
    );
}
