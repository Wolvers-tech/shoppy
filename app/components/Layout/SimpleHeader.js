import React from 'react';
import { StyleSheet} from 'react-native';
import { Layout,Text,TopNavigation, TopNavigationAction ,Icon} from '@ui-kitten/components';


const styles = StyleSheet.create({
    HeaderTitle:{
      alignItems:'center',
      marginTop:10,
    },
})

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
  );
  
function SimpleHeader({navigation,title,BackAction_=false}) {

    const navigateBack = () => {
        navigation.goBack();
      };
    
      const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
      );

      
    return (
        <TopNavigation style={styles.HeaderTitle} title={title} alignment='center' accessoryLeft={BackAction_&& BackAction}/>
    );
}

export default SimpleHeader;