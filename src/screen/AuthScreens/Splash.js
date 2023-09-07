import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import appColors from '../../constant/colors';

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
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
            {/* 
            <FastImage resizeMode='cover' source={require('../../assets/images.jpeg')} style={style.splashView}>

            </FastImage> */}
            <Text style={style.mainTitle}>Wellcome To Desgining Solution </Text>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    splashView: {
        height: hp(30),
        width: hp(30),
        resizeMode: "contain",
        borderRadius: 100
    },
    mainTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: appColors.white
    }
})