import { View, Text } from 'react-native'
import { Divider, TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import NavBarGeneral from '../../../components/general/navBar'
import { generalStyles } from '../../../styles'
import { saveUserField } from '../../../services/user'
import { useNavigation } from '@react-navigation/native'

export default function EditProfileFieldScreen({ route }) {
    const { title, field, value } = route.params;
    const [textInputValue, setTextInputValue] = useState(value)
    const navigation = useNavigation()
    const onSave = () => { 
        saveUserField(field, textInputValue)
        .then(() => navigation.goBack())
        .catch((err) => err)
     }
    return (
        <SafeAreaView style={styles.container} >
            <NavBarGeneral title={title} leftButton={{ display: true, name: 'save', action: onSave }} />
            <Divider />
            <View style={styles.mainContainer}>
                <Text style={styles.title}>{title}</Text>
                <TextInput
                    style={generalStyles.textInput}
                    value={textInputValue}
                    onChangeText={setTextInputValue}
                />
            </View>
        </SafeAreaView>
    )
}