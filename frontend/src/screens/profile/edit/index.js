import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import NavBarGeneral from '../../../components/general/navBar'
import * as ImagePicker from 'expo-image-picker'
import { saveUserProfileImage } from '../../../services/user'



export default function EditProfileScreen() {
    const currentUser = useSelector(state => state.auth.currentUser)
    const currentUserPosts = useSelector(state => state.posts.currentUserPosts)
    const auth = useSelector(state => state.auth)
    const navigation = useNavigation();
    const chooseImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })
        if (!result.cancelled) {
            saveUserProfileImage(result.uri)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <NavBarGeneral title={'Edit Profile'} />
            <View style={styles.imageContainer}>
                <TouchableOpacity
                    style={styles.imageViewContainer}
                    onPress={() => chooseImage()}
                >
                    <Image style={styles.image}
                        source={{ uri: auth.currentUser.photoURL }} />
                    <View style={styles.imageOverlay} />
                    <Feather name='camera' size={26} color={'white'} />
                </TouchableOpacity>

            </View>
            <View style={styles.feildsContainer}>
                <TouchableOpacity style={styles.feildItemContainer}
                    onPress={() => navigation.navigate('editProfileField',
                        {
                            title: 'Display Name',
                            field: 'displayName',
                            value: auth.currentUser.displayName
                        })}>
                    <Text>Display Name</Text>
                    <View style={styles.feildValueContainer}>
                        <Text>{auth.currentUser.displayName}</Text>
                        <Feather name='chevron-right' size={20} color='gray' />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView >

    )
}