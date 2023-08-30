import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import appColors from '../../constant/colors'
import AppFonts from '../../constant/fonts'
import CoustomBtn from '../../components/CoustomBtn'
import { CountryPicker } from 'react-native-country-codes-picker'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import FastImage from 'react-native-fast-image'
import CountryFlagView from '../../components/CountryFlagView'
import CoustomInput from '../../components/CoustomInput'

export default function Login({ navigation }) {
    const [countryCode, setCountryCode] = useState("+1");
    const [countryFlag, setCountryFlag] = useState("");
    console.log('courfla=>>', countryFlag);
    const [isVisible, setIsVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [show, setShow] = useState(false);
    return (
        <View style={style.mainContainer}>
            <View style={{justifyContent:"center",padding:10}}>
            
            <Text style={style.mainTitle}>Login</Text>
            <Text style={style.textTitle}>Enter Your Registered Number</Text>


            <View style={{ marginTop: "5%" }}>
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
            <Text style={style.RegsisterText}>Not Registered Yet ?<Text style={style.signupText}>Sign Up</Text></Text>
            </View>

            <CoustomBtn
                width={"90%"}
                title={'Login'}
                marginTop={'20%'} />
        </View>
    )
}
const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: appColors.white,
        justifyContent:"center"
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
        height: heightPercentageToDP(5),
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
        height: heightPercentageToDP(2.5),
        width: heightPercentageToDP(2.5),
        marginHorizontal: 5,
    },

    downarrow: {
        height: heightPercentageToDP(1.8),
        width: heightPercentageToDP(1.8),
        marginHorizontal: 5,
    },
    textInput: {
        height: heightPercentageToDP(5),
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
        marginTop:5,
        fontFamily:AppFonts.medium
    },
    RegsisterText: {
        fontFamily: AppFonts.medium,
        color: appColors.black,
        marginTop:10,

        fontSize: 13
    },
    signupText: {
        fontFamily: AppFonts.medium,
        color: appColors.blue,
        fontSize: 13
    }

})