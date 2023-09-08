import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppFonts from '../../constant/fonts'
import appColors from '../../constant/colors'

export default function Favourite() {
  return (
    <View style={style.mainContainer}>
      <Text style={style.mainText}> Wellcome To favourite Page</Text>
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