import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const Favorites = () => {
    const route = useRoute();
    const { favoriteList } = route.params;
    return (
      <FlatList
        data={favoriteList}
        renderItem={({ item }) => {
          return (
            <View style={styles.listContainer}>
              <View>
                <Image
                  source={{ uri: 'https://image.tmdb.org/t/p/w185' + item.poster_path }}
                  style={styles.image}
                  resizeMode='contain'
                />
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

                      <Text
                        style={{
                          fontSize: 18,
                          paddingLeft: 10,
                          color: '#64676D',
                        }}>
                       {item.title}
                      </Text>
                     

                    
                    </View>
            </View>
          );
        }}
      />
    );
  };

const styles = StyleSheet.create({
    listContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        borderRadius: 8,
        backgroundColor: '#edf2fb'
      },
      image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        opacity: 0.7
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        fontColor: '#010101'
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
      },
      icon: {
        position: 'absolute',
        top: 10,
        right: 10
      },
      header: {
        alignItems: 'center'
      }
})