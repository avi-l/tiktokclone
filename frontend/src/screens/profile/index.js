import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import ProfileNavBar from '../../components/profile/navBar'
import ProfileHeader from '../../components/profile/header'
import ProfilePostList from '../../components/profile/postList'


export default function ProfileScreen() {
    const currentUser = useSelector(state => state.auth.currentUser)
    const currentUserPosts = useSelector(state => state.posts.currentUserPosts)

    return (
        <View style={styles.container}>
            <ProfileNavBar user={currentUser} />
            <ProfileHeader user={currentUser} />
            <ProfilePostList posts={currentUserPosts} />
        </View>
    )
}