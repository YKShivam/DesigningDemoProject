import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import appColors from '../../constant/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppFonts from '../../constant/fonts';
import CoustomBtn from '../../components/CoustomBtn';
import auth from '@react-native-firebase/auth';

export default function Verification({ navigation,route }) {
    const [otp, setOtp] = useState("");
    const [confirm, setConfirm] = useState(null)

    useEffect(() => {
        if (route?.params?.confirmation) {
          setConfirm(route?.params?.confirmation);
      }
    }, [route?.params?.confirmation])
    useEffect(() => {
        auth().signOut()
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
      }, []);

      function onAuthStateChanged(user) {
        console.log("asjdhfjhsdfj",user);
        if (user) {
            navigation?.navigate('BottamTab')
        }
      }    

    const submit=async()=>{
        if (!confirm) {
            return
        }
        try {
            await confirm.confirm(otp);
          } catch (error) {
          }      
    }
    
    return (
        <View style={{backgroundColor:appColors.white}}>
            <View style={{marginTop:hp(6),padding:18}}>
                <TouchableOpacity style={{marginBottom:hp(4)}}>
                    <Image source={require("../../assets/back.png")} style={{height:18,width:18}}/>
                </TouchableOpacity>
                <Text style={style.mainTitle}>Verify mobile number</Text>
                <Text style={style.textTitle}>Enter the code sent to xxx-xxx-xxxx</Text>
                <View style={style.optContain}>
                    <OTPInputView
                        placeholderCharacter="*"
                        code={otp}
                        style={{ width: "100%", minHeight: 50, }}
                        pinCount={6}
                        autoFocusOnLoad={false}
                        codeInputFieldStyle={style.underlineStyleBase}
                        codeInputHighlightStyle={style.underlineStyleHighLighted}
                        placeholderTextColor={appColors.textcolor}
                        onCodeChanged={(i) => {
                            setOtp(i);
                        }}
                    />
                    <Text style={style.RegsisterText}>Did not recieve code? <Text style={style.signupText}>Resend it</Text></Text>
                </View>
            </View>

            <CoustomBtn
                title={'Contniue'}
                width={'80%'}
                marginTop={ hp(20)}
                onPress={() => {
                    // navigation.navigate('BottamTab')
                    submit()
                }}
            />
        </View>
    )
}
const style = StyleSheet.create({

    optContain: {
        height: 60,
        width:"80%",
        marginTop: 10,
    },
    underlineStyleBase: {
        borderRadius: 10,
        backgroundColor: appColors.white,
        color: appColors.black,
        fontSize: 16,
        textAlignVertical: "center",
        alignSelf: "center",  
    },
    mainTitle: {
        fontFamily: AppFonts.bold,
        color: appColors.black,
        fontSize: 26
    },
    textTitle: {
        color: appColors.black,
        fontFamily: AppFonts.medium,
        fontSize:16
    },
    RegsisterText: {
        fontFamily: AppFonts.medium,
        color: appColors.black,
        fontSize: 13
    },
    signupText: {
        fontFamily: AppFonts.medium,
        color: appColors.blue,
        fontSize: 13
    },
    underlineStyleHighLighted: {
        borderColor: appColors.blue,
      },
})