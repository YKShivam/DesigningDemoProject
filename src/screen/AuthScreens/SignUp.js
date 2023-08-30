import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CoustomInput from '../../components/CoustomInput'

export default function SignUp() {
  return (
    <View>
          <Text style={style.mainTitle}>Login</Text>
            <CoustomInput
                title={'ENTER FULL NAME'}
                placeholder={'John Doe'} />
    </View>
  )
}
const style =StyleSheet.create({
  mainTitle:{
    flex:1
  }
})