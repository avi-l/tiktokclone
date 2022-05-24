import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAuthStateListener } from '../../redux/actions/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../../screens/auth';
import SavePostScreen from '../../screens/savePost';
import HomeScreen from '../home';
import styles from './styles';
import EditProfileScreen from '../../screens/profile/edit';
import EditProfileFieldScreen from '../../screens/profile/field';

const Stack = createNativeStackNavigator()

export default function Route() {
    const currentUserObj = useSelector((state) => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthStateListener())
    }, [])

    if (!currentUserObj.loaded) {
        return <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
        </View>
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!currentUserObj.currentUser
                    ? <Stack.Screen name='auth' component={AuthScreen} options={{ headerShown: false }} />
                    :
                    <>
                        <Stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='savePost' component={SavePostScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='editProfile' component={EditProfileScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='editProfileField' component={EditProfileFieldScreen} options={{ headerShown: false }} />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}