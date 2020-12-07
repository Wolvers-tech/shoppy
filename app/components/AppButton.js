import React from 'react';
import { StyleSheet,Text, TouchableOpacity} from 'react-native';
import appColors from '../config/color'

function AppButton({title,onPress,color="primary"}) {
    return (
      <TouchableOpacity style = {[styles.button, {backgroundColor:appColors[color]}]} onPress= {onPress}>
          <Text style = {styles.text}>
                {title}
          </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
 button : {
     backgroundColor : appColors.primary, 
     borderRadius : 25,
     justifyContent: 'center',
     alignItems: 'center',
     padding:15,
     width: '100%',
     marginVertical:10
 } , 
 text:{
     color:appColors.bgWhite, 
     fontSize:18,
     textTransform:'uppercase',
     fontWeight:"bold"
 }
})

export default AppButton;