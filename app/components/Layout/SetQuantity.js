import React from 'react';
import { StyleSheet} from 'react-native';
import appColors from '../../config/color'
import { Button, Layout,Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
    counterContaner:{
        backgroundColor:appColors.light,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        
    }
    
})

function SetQuantity({setCount,count,min=0}) {
    return (
        <Layout style={styles.counterContaner}>
            <Button status='warning'  onPress={() => setCount(count - 1)} disabled={(count>min) ?false:true}>-</Button>
            <Text category={'h5'}> {count}</Text>
            <Button status='primary' onPress={() => setCount(count + 1)}>+</Button>
            
            
        </Layout>
    );
}

export default SetQuantity;

