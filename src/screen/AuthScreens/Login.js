import { View, Text, StyleSheet, Pressable, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import appColors from '../../constant/colors'
import AppFonts from '../../constant/fonts'
import CoustomBtn from '../../components/CoustomBtn'
import { CountryPicker } from 'react-native-country-codes-picker'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import FastImage from 'react-native-fast-image'
import CountryFlagView from '../../components/CountryFlagView'
import CoustomInput from '../../components/CoustomInput'
import auth from '@react-native-firebase/auth';
import Loader from '../../components/Loader'

export default function Login({ navigation }) {
    const [countryCode, setCountryCode] = useState("+91");
    const [countryFlag, setCountryFlag] = useState("")
    const [isVisible, setIsVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false)

    // useEffect(() => {
    //     logoutPreviousSession()
    // }, [])

    // const logoutPreviousSession = async () => {
    //     let logout = await auth().signOut()
    //     console.log(logout);
    // }

    const LoginUser = async () => {
        if(countryCode?.length==0){
            Alert.alert('Please select country code')
            return
        }
        else if(phoneNumber?.length==0){
            Alert.alert('Please enter phone number')
            return
        }
        setVisible(true)
        try {
            const confirmation = await auth().signInWithPhoneNumber((countryCode + phoneNumber)?.toString());
            console.log(confirmation);
            navigation?.navigate('Verification', { confirmation })
        } catch (e) {
            console.log(e);
        }
        finally{
            setVisible(false)
        }
    }

    return (
        <View style={style.mainContainer}>
            {visible && <Loader/>}
            <View style={{ justifyContent: "center", padding: 18, marginTop: hp(10) }}>

                <Text style={style.mainTitle}>Login</Text>
                <Text style={style.textTitle}>Enter Your Registered Number</Text>


                <View style={{ marginTop: hp(2) }}>
                    <CountryFlagView
                        pickerButtonPress={
                            (i) => {
                                setCountryCode(i?.dial_code)
                                setCountryFlag(i.flag)
                            }}
                        onChangeText={(i) => {
                            setPhoneNumber(i)
                        }}
                    />
                </View>
                <Text style={style.RegsisterText}>Not Registered Yet? <Text style={style.signupText} onPress={() => navigation?.navigate("SignUp")}>Sign Up</Text></Text>
            </View>

            <CoustomBtn
                width={"90%"}
                title={'Login'}
                marginTop={hp(20)}
                onPress={() => {
                    // navigation.navigate('Verification')
                    LoginUser()
                }} />
        </View>
    )
}
const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: appColors.white,
        // justifyContent: "space-around"
    },
    mainTitle: {
        fontFamily: AppFonts.bold,
        color: appColors.black,
        fontSize: 18
    },
    textInputContain: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 10,
    },
    countryContain: {
        flexDirection: "row",
        height: hp(5),
        width: "18%",
        justifyContent: "space-between",
        backgroundColor: appColors.white,
        paddingHorizontal: 2,
        borderColor: "lightgrey",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        shadowColor: "#000",
        paddingHorizontal: 5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    flatIconStyle: {
        height: hp(2.5),
        width: hp(2.5),
        marginHorizontal: 5,
    },

    downarrow: {
        height: hp(1.8),
        width: hp(1.8),
        marginHorizontal: 5,
    },
    textInput: {
        height: hp(5),
        width: "70%",
        textAlign: "left",
        color: appColors.black,
        borderWidth: 1,
        borderColor: "lightgrey",
        fontSize: 18,
        fontFamily: AppFonts.medium,
        // color: appColors.textcolor,
        backgroundColor: appColors.white,
        borderRadius: 10,
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
        color: appColors.black,
        marginTop: 5,
        fontFamily: AppFonts.medium
    },
    RegsisterText: {
        fontFamily: AppFonts.medium,
        color: appColors.black,
        marginTop: 10,
        fontSize: 13
    },
    signupText: {
        fontFamily: AppFonts.medium,
        color: appColors.blue,
        fontSize: 13,
        textDecorationLine: "underline"
    }
})