import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import appColors from '../../constant/colors'
import AppFonts from '../../constant/fonts'

export default function Browser() {
  return (
    <View style={style.mainContainer}>
    <Text style={style.mainText}> Wellcome To Browser Page</Text>
  </View>
  )
}
const style =StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:appColors.black
  },
  mainText:{
    fontFamily:AppFonts.bold,
    fontSize:20,
    color:appColors.white
  }
})