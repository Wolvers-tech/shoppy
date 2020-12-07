import React from 'react';
import { Text,StyleSheet } from 'react-native';

function AppText({children,style}) {
    return (
    <Text style = {[styles.text, style]}>{children}</Text>
    );
}


const styles = StyleSheet.create({
    text: {
        fontSize:15,
        textTransform:"capitalize"
    }
})
export default AppText;