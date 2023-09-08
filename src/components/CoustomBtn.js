import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import appColors from '../constant/colors'
import AppFonts from '../constant/fonts'

export default function CoustomBtn({
  title, onPress,
  marginBottom,
  marginTop,
  width

}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.mainContainer, { marginTop: marginTop },{width:width}, { marginBottom: marginBottom }]}>
      <Text style={style.textTitle}>{title}</Text>

    </TouchableOpacity>
  )
}
const style = StyleSheet.create({
  mainContainer: {
    height: heightPercentageToDP(6.5),
    borderRadius: 10,
    backgroundColor: appColors.blue,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  textTitle: {
    fontFamily: AppFonts.bold,
    color: appColors.white,
    fontSize: 18
  }
})