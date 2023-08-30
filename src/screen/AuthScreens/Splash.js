import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Wellcome')
        }, 2000)
    }, [])
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                alignItems: "center",
                justifyContent: "center"
            }}>

            <FastImage resizeMode='cover' source={require('../../assets/images.jpeg')} style={style.splashView}>

            </FastImage>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    splashView: {
        height: hp(30),
        width: hp(30),
        resizeMode: "contain",
        borderRadius: 100
    }
})