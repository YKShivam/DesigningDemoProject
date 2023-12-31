import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppFonts from '../../constant/fonts'
import appColors from '../../constant/colors'

export default function Account() {
  return (
    <View style={style.mainContainer}>
      <Text style={style.mainText}> Wellcome To Account Page</Text>
    </View>
  )
}
const style =StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"red"
  },
  mainText:{
    fontFamily:AppFonts.bold,
    fontSize:20,
    color:appColors.white
  }
})