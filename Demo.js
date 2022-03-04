import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Demo = ({ route, navigation }) => {
const { itemId, otherParam } = route.params;
  return (
    <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}> 
      <Text style={{fontSize:32,fontWeight:'bold',color:'black'}}>otherParam: {JSON.stringify(otherParam)}</Text>
     <Button 
     title='Next'
     onPress={() => {
          navigation.navigate('Next');
        }}
     />

      </View>
  );
};

export default Demo;

const styles = StyleSheet.create({});
