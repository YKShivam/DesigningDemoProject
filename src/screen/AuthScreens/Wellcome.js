import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import AppFonts from '../../constant/fonts'
import appColors from '../../constant/colors'
import CoustomBtn from '../../components/CoustomBtn'

export default function Wellcome({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={style.mainText}>Wellcome To Desgining Solution</Text>
      <CoustomBtn
        width={'70%'}
        title={'Login'}
        marginTop={'10%'}
        onPress={() => navigation?.navigate('Login')}
      />
      <CoustomBtn
        width={'70%'}
        title={'Sign-Up'}
        marginTop={'10%'}
        onPress={() => navigation?.navigate('SignUp')}
      />
    </View>
  )
}
const style = StyleSheet.create({
  mainText: {
    fontFamily: AppFonts.bold,
    fontSize: 22,
    color: appColors.black,
    textAlign: "center",
    marginTop: "10%"
  }
})