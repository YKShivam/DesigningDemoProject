import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'

export default function CoustomInput() {
    return (
        <View style={style.mainContainer}>
            <Text>CoustomInput</Text>
            <TextInput
             maxLength={maxLength}
             multiline={multiline}
             placeholder={placeholder}
             value={value}
             keyboardType={keyboardType}
             onChangeText={onChangeText}
            
            />
        </View>
    )
}
const style = StyleSheet.create({
    mainContainer: {
        height: heightPercentageToDP(6),
        width: "85%",
        backgroundColor: "red"
    }
})