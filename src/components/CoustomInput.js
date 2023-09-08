import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import AppFonts from '../constant/fonts'
import appColors from '../constant/colors'

export default function CoustomInput({
    maxLength,
    multiline,
    placeholder,
    value,
    keyboardType,
    onChangeText,
    title,
    marginTop
}) {
    return (
        <View style={[style.mainContainer,{marginTop:marginTop}]}>
            <Text style={style.textTitle}>{title}</Text>
            <TextInput
                maxLength={maxLength}
                multiline={multiline}
                placeholder={placeholder}
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                style={{
                    fontSize: 13,
                    color: appColors.black,
                    marginTop: -10

                }}
            />
        </View>
    )
}
const style = StyleSheet.create({
    mainContainer: {
        height: heightPercentageToDP(5),
        width: "100%",
        borderRadius: 10,
        padding: 8,
        paddingVertical:4,
        backgroundColor: appColors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textTitle: {
        fontFamily: AppFonts.Semibold,
        fontSize: 10,
        color: appColors.grey
    }
})