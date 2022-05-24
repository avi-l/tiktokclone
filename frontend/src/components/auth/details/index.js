import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux'
import styles from './style';
import { Feather } from '@expo/vector-icons';
import { signup, login } from '../../../redux/actions/auth';
import NetworkLogger from 'react-native-network-logger';

const MyScreen = () => <NetworkLogger />;

export default function SignUp(props) {
    const { authPage, setSignupPage } = props
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const handleLogin = () => {
        setIsLoading(true)
        dispatch(login(email, password))
            .then(() => {
                setIsLoading(false)
                console.log('login successful')
            })
            .catch((err) => {
                setIsLoading(false)
                console.log('login unsuccessful')
            })
    }
    const handleSignup = () => {
        setIsLoading(true)
        dispatch(signup(email, password))
            .then(() => {
                setIsLoading(false)
                console.log('signup successful')
            })
            .catch(() => {
                setIsLoading(false)
                console.log('signup unsuccessful')
            })
    }
    if (isLoading) {
        return (
            <View style={styles.uploadingContainer}>
                {/* <ActivityIndicator color='red' size='large' /> */}
                {MyScreen()}
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Feather name="arrow-left" size={24} color="black"
                    onPress={() => setSignupPage(false)} />
            </TouchableOpacity>
            <TextInput style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
                placeholder='Email' />
            <TextInput style={styles.textInput}
                onChangeText={(pw) => setPassword(pw)}
                secureTextEntry
                placeholder='Password' />
            <TouchableOpacity style={styles.button}
                onPress={() => authPage ? handleSignup() : handleLogin()}>
                <Text style={styles.buttonText}>{authPage ? 'Sign Up' : 'Sign In'}</Text>
            </TouchableOpacity>
        </View>
    )
}