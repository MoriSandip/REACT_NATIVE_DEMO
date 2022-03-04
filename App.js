import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Demo from './Demo';
import Next from './Next';
import APIREDUXDEMO from './APIREDUXDEMO';
import APISTORDATA from './APISTORDATA';
import ItemData from './ItemData';
import FavoritesListScreen, { Favorites } from './FavoritesListScreen';

const MainApp = () => {

const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Demo} />
      <Stack.Screen name="Next" component={Next} /> */}
      <Stack.Screen name="API" component={APIREDUXDEMO} />
      <Stack.Screen name="APISTORDATA" component={APISTORDATA} />
      <Stack.Screen name="ItemData" component={ItemData} />
    
      <Stack.Screen name="FavoritesListScreen" component={Favorites} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default MainApp;