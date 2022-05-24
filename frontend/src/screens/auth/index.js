import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AuthMenu from '../../components/auth/menu'
import styles from './styles'
import SignUp from '../../components/auth/details'

export default function AuthScreen() {
  const [authPage, setAuthPage] = useState(false)
  const [signupPage, setSignupPage] = useState(false)
  return (
    <View style={styles.container}>
      {signupPage
        ? <SignUp authPage={authPage} setAuthPage={setAuthPage}
        signupPage={signupPage} setSignupPage={setSignupPage} />
        : <AuthMenu authPage={authPage} setAuthPage={setAuthPage}
          signupPage={signupPage} setSignupPage={setSignupPage} />
      }
    </View>
  )
}