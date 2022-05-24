import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { buttonStyles } from '../../../styles'
import { useNavigation } from '@react-navigation/native'

export default function ProfileHeader({ user }) {
    console.log(user)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <Avatar.Image size={80} source={{uri: user.photoURL}} />
            <Text style={styles.emailText} >{user.email}</Text>
            <View style={styles.counterContainer}>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Following</Text>
                </View>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Followers</Text>
                </View>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Likes</Text>
                </View>
            </View>
            <TouchableOpacity style={buttonStyles.grayOutlinedButton}
            onPress={() => navigation.navigate('editProfile')} >
                <Text>Edit Profile</Text>
            </TouchableOpacity>

        </View>
    )
}