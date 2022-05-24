import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import { Feather } from '@expo/vector-icons';
import NetworkLogger from 'react-native-network-logger';
import NetInfo from '@react-native-community/netinfo';


export default function AuthMenu(props) {
    const [showNtw, setShowNtw] = useState(false)
    const [movies, setMovies] = useState([])
   
    const fetchMovies = async () => {
        try {
            NetInfo.fetch().then(state => {
                console.log('Connection type', state.type);
                console.log('Is connected?', state.isConnected);
                console.log(state)
              });
            const response = await fetch(
              'https://reactnative.dev/movies.json'
            );
            const json = await response.json();
            setMovies(json.movies);
          } catch (error) {
            console.error(error);
          }
    };

    if (showNtw) return (
        <>
        <NetworkLogger />
        <TouchableOpacity onPress={() => setShowNtw(false)}>
            <Text> close </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
           fetchMovies()
        }}>
            <Text> Ping </Text>
            <FlatList 
                data={movies}
                renderItem={({ item }) => ( 
                    <View>
                      <Text>{item.title}</Text>
                    </View>
                  )}
                keyExtractor={(item) => item.id}
            />
        </TouchableOpacity>
        </>
    )

    const { authPage, setAuthPage, signupPage, setSignupPage } = props
    return (
        <View style={styles.container}>
            <View style={styles.containerMain}>
                <Text style={styles.headerText}>{authPage ? 'Sign Up' : 'Sign In'}</Text>
                <TouchableOpacity style={styles.providerButton}
                onPress={() => setSignupPage(true)}>
                    <Feather name="user" size={24} color="black" />
                    <Text style={styles.providerButtonText}> Use Email</Text>
                    <View />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.containerBottomButton}
                onPress={() => setShowNtw(true) }>
            <Text>Show NTW</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerBottomButton}
                onPress={() => authPage ? setAuthPage(false) : setAuthPage(true)}>
                {authPage
                    ? <Text>Already Have An Account?<Text style={styles.bottomButtonText}> Log In!</Text></Text>
                    : <Text>Don't Have An Account?<Text style={styles.bottomButtonText}> Sign Up!</Text></Text>
                }

            </TouchableOpacity>
        </View>
    )
}