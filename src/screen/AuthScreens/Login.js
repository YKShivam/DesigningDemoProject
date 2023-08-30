import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import appColors from '../../constant/colors'
import AppFonts from '../../constant/fonts'
import CoustomBtn from '../../components/CoustomBtn'
import { CountryPicker } from 'react-native-country-codes-picker'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import FastImage from 'react-native-fast-image'

export default function Login({ navigation }) {
    const [countryCode, setCountryCode] = useState("+1");
    const [countryFlag, setCountryFlag] = useState("");
    console.log('courfla=>>', countryFlag);
    const [isVisible, setIsVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [show, setShow] = useState(false);
    return (
        <View style={style.mainContainer}>
            <Text style={style.mainTitle}>Login</Text>
            <View style={style.textInputContain}>

                <Pressable
                    onPress={() => {
                        setIsVisible(true);
                        setShow(true)
                    }}
                    style={[style.countryContain, { borderWidth: 1, }]}
                >


                    <Text style={{ fontSize: 20 }} >{countryFlag} </Text>

                    <FastImage
                        resizeMode="contain"
                        tintColor={appColors.black}
                        source={require('../../assets/downIcon.png')}
                        style={style.downarrow}
                    />

                    <CountryPicker
                        show={show}

                        pickerButtonOnPress={(item) => {
                            console.log('item==>>', item);
                            setCountryCode(item.dial_code);
                            setCountryFlag(item.flag)
                            setShow(false);
                        }}
                        style={{ height: heightPercentageToDP(30) }}
                    />
                </Pressable>
                <TextInput
                    style={style.textInput}
                    placeholder="Enter Phone Number"
                    placeholderTextColor={"grey"}
                    keyboardType="numeric"
                    onChangeText={(i) => {
                        setPhoneNumber(i);
                    }}
                    maxLength={10}
                />
            </View>
            <CoustomBtn />
        </View>
    )
}
const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: appColors.white
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



})