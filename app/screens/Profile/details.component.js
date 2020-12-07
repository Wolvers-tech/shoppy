import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import SimpleHeader from '../../components/Layout/SimpleHeader';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = ({ navigation,route }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );
 console.log(route);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SimpleHeader navigation={navigation} title = {route.name}BackAction_={true}></SimpleHeader>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>{route.name}</Text>
      </Layout>
    </SafeAreaView>
  );
};