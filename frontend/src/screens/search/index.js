import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchUserItem from '../../components/search/userItem'
import { queryUsersByEmail } from '../../services/user'

export default function SearchScreen(props) {
    const [textInput, setTextInput] = useState('')
    const [searchUsers, setSearchUsers] = useState([])
    useEffect(() => {
        queryUsersByEmail(textInput)
        .then(setSearchUsers)
    },[textInput])
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                onChangeText={setTextInput}
                style={styles.textInput}
                placeholder={'Search'}
            />
            <FlatList 
                data={searchUsers}
                renderItem={SearchUserItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>

    )
}