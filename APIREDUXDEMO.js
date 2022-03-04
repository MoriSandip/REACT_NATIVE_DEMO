import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, Button, TextInput, ImageBackgroundBase} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getMovies } from './redux/actions/counter_actions';
import { SearchBar } from 'react-native-screens'; 
import InternetConnectionAlert from 'react-native-internet-connection-alert';
const APIREDUXDEMO = ({navigation}) => { 
  const movies = useSelector(state=>state.movies);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies()); 
  const [favoriteList, setFavoruiteList] =  useState([]);
  const [loading , setLoading] = useState(false);
  const [data , setData] = useState([]);
  const [data1 , setData1] = useState([]);
  const [connection , setconnection] = useState(null);
  const list = [];
  useEffect(() => {
    fetchMovies();
  }, []);
  const onFavorite = restaurant => {
    setFavoruiteList([...favoriteList, restaurant]);
  };
  const onRemoveFavorite = restaurant => {
    const filteredList = favoriteList.filter(
      item => item.id !== restaurant.id
    );
    setFavoruiteList(filteredList);
  };

  const ifExists = restaurant => {
    if (favoriteList.filter(item => item.id === restaurant.id).length > 0) {
      return true;
    }
    return false;
  };
 
  return (
    <>
      <InternetConnectionAlert
  onChange={(connectionState) => {
    console.log("Connection State: ", connectionState.isConnected);
    setconnection(connectionState.isConnected)
     
  }}
> 
{connection ?  <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>

<View
style={{marginVertical:10}}
>
  <TextInput        
  placeholder="Search Here..."        
  lightTheme        
  round  
  style={{borderColor:'#505050',borderWidth:1,borderRadius:8,padding:12}}      
    onChangeText={ (text) => {    
  const newData =  movies.filter(item => {      
  const itemData = `${item.title.toUpperCase()}   
  ${item.title.toUpperCase()} ${item.title.toUpperCase()}`;
   const textData = text.toUpperCase();  
   return itemData.indexOf(textData) > -1;    
});

// this.setState({ data: newData });  
setData(newData)
// data = movies
}}
  autoCorrect={false}             
/> 
</View>
  <Text style={{fontSize: 22}}>Popular Movies</Text>
  <Button title='Check Data'
   onPress={() => {
      navigation.navigate('APISTORDATA');
    }} />

    <View style={{margin:8}}></View>

    <Button title='Favorites'
   onPress={() => {
    navigation.navigate('FavoritesListScreen', {
      favoriteList
    });
    }} />
     
   
  <View style={{flex: 1, marginTop: 12}}>
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => {
        const IMAGE_URL =
          'https://image.tmdb.org/t/p/w185' + item.poster_path;
        return (
          <TouchableOpacity style={{marginVertical: 12}}
        onPress={() => {
        navigation.navigate('ItemData', {
        item,
      });
    }}
          >
            <View style={{flexDirection: 'row', flex: 1}}>
              <Image
                source={{
                  uri: IMAGE_URL,
                }}
                resizeMode="cover"
                style={{width: 100, height: 150, borderRadius: 10}}
              />
              <View style={{flex: 1, marginLeft: 12}}>
                <View>
                  <Text style={{fontSize: 22, paddingRight: 16}}>
                    {item.title}
                  </Text>
                  {/* <Text style={{fontSize: 22, paddingRight: 16}}>
                    {item.id}
                  </Text> */}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <MaterialIcons color="green" name="thumb-up" size={32} />
                  <Text
                    style={{
                      fontSize: 18,
                      paddingLeft: 10,
                      color: '#64676D',
                    }}>
                    {item.vote_count}
                  </Text>
                 

                  <TouchableOpacity
style={{
                      marginLeft: 14,
                      flexDirection: 'row',
                      padding: 2,
                      marginHorizontal:16,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      width: 40,
                    }}
onPress={() => (ifExists(item) ? onRemoveFavorite(item) : onFavorite(item))}
>
<MaterialIcons
name={ifExists(item) ? 'favorite' : 'favorite-outline'}
size={32}
color={'red'}
/>
</TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  </View>


</View> :
<View style = {{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>

 
<Text> Please Check Internet</Text>
</View>
}



</InternetConnectionAlert>
    </>
  
  );
};

export default APIREDUXDEMO;