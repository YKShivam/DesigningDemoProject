import { View, Text, StyleSheet, Pressable, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import appColors from '../../constant/colors'
import AppFonts from '../../constant/fonts'
import CoustomBtn from '../../components/CoustomBtn'
import { CountryPicker } from 'react-native-country-codes-picker'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import FastImage from 'react-native-fast-image'
import CountryFlagView from '../../components/CountryFlagView'
import CoustomInput from '../../components/CoustomInput'
import auth from '@react-native-firebase/auth';
import Loader from '../../components/Loader'

export default function SignUp({ navigation }) {
  const [countryCode, setCountryCode] = useState("+91");
  const [countryFlag, setCountryFlag] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [show, setShow] = useState(false);
  const [name, setName] = useState("")
  const [visible, setVisible] = useState(false)

  const onSubmit = async () => {
if(name?.length==0){
  Alert.alert('Please enter name')
return
}
else if(phoneNumber?.length==0){
  Alert.alert('Please enter phone number')
return
}
setVisible(true)
const confirmation = await auth().signInWithPhoneNumber((countryCode+phoneNumber)?.toString());
setVisible(false)
    console.log(confirmation);
    // const confirmation ="confiraksdfj"
    navigation?.navigate('Verification',{confirmation})
    // setConfirm(confirmation);

    // const setting  = auth().verifyPhoneNumber((countryCode+phoneNumber)?.toString()).on('state_changed', (phoneAuthSnapshot) => {
    //   console.log('Snapshot state: ', phoneAuthSnapshot.state);
    // });

    //  forceRecaptchaFlowForTesting(true)
    //  setAutoRetrievedSmsCodeForPhoneNumber(phoneNumber.toString(), "123456")
    // const settings = auth().settings;
    // console.log(settings.appVerificationDisabledForTesting);
  }
  return (

    <View style={style.mainContainer}>
      {visible && <Loader/>}
      <View style={{ padding: 18, marginTop: heightPercentageToDP(10) }}>

        <Text style={style.mainTitle}>Sign Up</Text>
        <Text style={style.textTitle}>Please provide the below details</Text>
        <CoustomInput
          title={'Enter Full Name'}
          marginTop={20}
          value={name}
          onChangeText={t => setName(t)}
        />
        <View style={{ marginTop: heightPercentageToDP(2) }}>
          <CountryFlagView
            pickerButtonPress={(i) => {
              setCountryCode(i?.dial_code)
              setCountryFlag(i.flag)
            }}
            onChangeText={(i) => {
              setPhoneNumber(i)
            }}
          />
        </View>
      </View>

      <CoustomBtn
        width={"90%"}
        title={'Signup'}
        marginTop={heightPercentageToDP(20)}
        onPress={() => onSubmit()}
      />
    </View>
  )
}


const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
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
    fontSize: 13
  }

})


