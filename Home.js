import React, { useState } from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useSelector, useDispatch,connect} from 'react-redux';
import { addTodo,decrement_counter, devide_counter, getFullName, getName, increment_counter, multi_counter } from './redux/actions/counter_actions';

const Home = ({navigation }) => {
  const counter = useSelector(state=>state.counter);
  const nameData = useSelector(state=>state.nameData);
  const sem = useSelector(state=>state.sem);
  const dispatch = useDispatch(); 
  const [text, onChangeText] = React.useState("Useless Text"); 
  return(
    <View 
      style={{
        flex:1,
        justifyContent:'center'
      }} 
    >

    <View style={{margin:32}}>
    <Text style={{margin:12,fontSize:24,fontWeight:'bold',textAlign:'center'}}>{sem}</Text>

    { (sem == "Sem - 1") ? <View style={{height:50,backgroundColor:'red',justifyContent:'center',alignContent:'center',alignItems:'center'}}><Text style={{color:'white',fontSize:22}}>initialState Data</Text></View> 
    : 
    <View style={{height:50,backgroundColor:'blue',justifyContent:'center',alignContent:'center',alignItems:'center'}}><Text style={{color:'white',fontSize:22}}>Data Change</Text></View>}
    </View>
     <Text style={{margin:12,fontSize:24,fontWeight:'bold',textAlign:'center'}}>{counter}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <Button 
        title="+"
        onPress={()=>dispatch(increment_counter())}
      />
     
      <Button 
        title="-"
        onPress={()=>dispatch(decrement_counter())}
      />
       <Button 
        title="*"
        onPress={()=>dispatch(multi_counter())}
      />
       <Button 
        title="/"
        onPress={()=>dispatch(devide_counter())}
      />
      </View>
     
     <View style={{margin:42}}>
     <Text style={{margin:12,fontSize:24,fontWeight:'bold',textAlign:'center'}}>{nameData}</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Button
       title='Name'
       onPress={()=>dispatch(getName())}
       />

       <Button
       title='Full Name'
       onPress={()=>dispatch(getFullName())} />
    </View>

     </View>
     <View>

     <TextInput 
        onChangeText={onChangeText}
        value={text}
        style={{borderRadius:8,borderWidth:1,borderColor:'blue',margin:12,padding:12}}
      />
      <Text style={{fontSize:20,fontWeight:'bold',marginVertical:8}}> {text}</Text>
      <Button 
        title='Edit'
        onPress={()=>dispatch(addTodo(text))}
        />
    </View>
     <View style={{margin:40}}>
        <Button 
        title='Pass Name'
        onPress={() => {
          navigation.navigate('Details', {
          otherParam:nameData ,
          });
        }}
        />
     </View>
    </View>
  )
}
export default Home;