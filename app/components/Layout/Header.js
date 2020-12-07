import React from 'react';

import { View,StyleSheet } from 'react-native';
import { ApplicationProvider, Layout, Text,IconRegistry ,Icon} from '@ui-kitten/components';
import HomeScreen from '../../screens/Home/HomeScreen';
import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
})


function Header({navigation}) {
    return (
      <TouchableOpacity onPress={ ()=>navigation.toggleDrawer()}>
      <Layout style = {{flexDirection:"row",alignItems:"center"}}>
         <Icon 
          style={styles.icon}
          fill='#8F9BB3'
          name='menu-outline'
         />
        <Text  category='h1'>E-Commerce Store</Text>
      </Layout>

      </TouchableOpacity>
    );
}

export default Header;