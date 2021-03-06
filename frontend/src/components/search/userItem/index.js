import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export default function SearchUserItem({ item }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{item.displayName}</Text>
            <Image style={styles.image} 
            source={{uri: item.photoURL}}/>
        </TouchableOpacity>
    )
}