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
    title
}) {
    return (
        <View style={style.mainContainer}>
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
        height: heightPercentageToDP(6),
        width: "85%",
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "center",
        paddingHorizontal: 5,
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
        fontSize: 14,
        color: appColors.black
    }
})