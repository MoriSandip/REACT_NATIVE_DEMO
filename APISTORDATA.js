// import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React from 'react';

// import {useSelector, useDispatch} from 'react-redux';
// const movies = useSelector(state=>state.movies);
// const APISTORDATA = ({navigation}) => {
//   return (
//     <View>

//     </View>
//   );
// };

// export default APISTORDATA;

// const styles = StyleSheet.create({});

import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
const APISTORDATA = ({navigation}) => {
    
const movies = useSelector(state=>state.movies);
  return (
    <View>
          <FlatList
          data={movies}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            const IMAGE_URL =
              'https://image.tmdb.org/t/p/w185' + item.poster_path;
            return (
              <View style={{marginVertical: 12}}>
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
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        alignItems: 'center',
                      }}>
                       <Text
                        style={{
                          fontSize: 18,
                          paddingLeft: 10,
                          color: '#64676D',
                        }}>
                        {item.vote_count}
                      </Text>
                      <TouchableOpacity
  
                        activeOpacity={0.7}
                        style={{
                          marginLeft: 14,
                          flexDirection: 'row',
                          padding: 2,
                          borderRadius: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: 40,
                          width: 40,
                        }}>
                        
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
    </View>
  );
};

export default APISTORDATA;

const styles = StyleSheet.create({});

