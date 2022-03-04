import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
const Next = ({navigation}) => {
const counter = useSelector(state=>state.counter);
const nameData = useSelector(state=>state.nameData);
const edit = useSelector(state=>state.edit);
const dispatch = useDispatch(); 
  return (
    <View>
    <Text style={{margin:12,fontSize:24,fontWeight:'bold',textAlign:'center'}}>{edit}</Text> 
    <Text style={{margin:12,fontSize:24,fontWeight:'bold',textAlign:'center'}}>{counter}</Text>
    <Text style={{margin:12,fontSize:24,fontWeight:'bold',textAlign:'center'}}>{nameData}</Text> 
    <Button
       title='API'
       onPress={() => {
         navigation.navigate('API');
       }}
       />
    </View>
  );
};
export default Next;
const styles = StyleSheet.create({});
