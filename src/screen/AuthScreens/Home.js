import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import AppFonts from '../../constant/fonts'
import appColors from '../../constant/colors'

export default function Home() {
  const [arr, setarr] = useState([
    { image: require('../../assets/b1.png'), title: "Whisky" },
    { image: require('../../assets/b2.png'), title: "Gin" },
    { image: require('../../assets/b3.png'), title: "Rum" },
    { image: require('../../assets/b4.png'), title: "Tequila" },

  ])
  const Block = ({ item, index }) => {
    console.log(item);
    return (
      <View style={style.parentContainer}>
        <Image style={style.bottalView}  source={item.image} />
        <Text style={style.bottalName}>{item.title}</Text>
      </View>
    )
  }

  const [arr2, setarr2] = useState([
    { image: require('../../assets/winbottle1.jpg'), name: "Corona Extra Beer", title: "375ml Can | 5%", heartIcon: require('../../assets/heart1.png'), price: '$2.98' },
    { image: require('../../assets/winebottale3.jpg'), name: "Coors Light Beer", title: "330ml Can | 6%", heartIcon: require('../../assets/heart1.png'), price: '$3.98' },
    { image: require('../../assets/winbottle1.jpg'), name: "Sappono Premimum Beer", title: "375ml Can | 5%", heartIcon: require('../../assets/heart1.png'), price: '$4.98' },
    { image: require('../../assets/winebottale3.jpg'), name: "Coors Light Beer", title: "400ml Can | 5%", heartIcon: require('../../assets/heart1.png'), price: '$1.98' },

  ])


  const Block2 = ({ item, index }) => {
    console.log(item);
    return (
      <View style={style.boxView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Image style={style.winBattaleView} source={item.image} />
          </View>
          <View style={{marginLeft:15}}>
            <Text style={style.bottalName}>{item.name}</Text>
            <Text style={style.bottaTtitle}>{item.title}</Text>
            <Text style={style.bottalPrice}>{item.price}</Text>
          </View>
        </View>

        <View>
          <Image tintColor='black' style={style.heart_Icon} source={item.heartIcon} />
        </View>

      </View>
    )
  }

  return (
    <View>
      <ScrollView nestedScrollEnabled={true} contentContainerStyle={{paddingBottom:heightPercentageToDP(2)}} >
      <Image source={require('../../assets/image4.jpg')} style={style.imageView} />
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 13, marginTop: 20 }}>
        <Text style={style.firstTitle}>Explore Liquor</Text>
        <Text style={style.secondTitle}>See All</Text>

      </View>
      {/* <View style={{width:"92%",borderWidth:2,alignItems:"center"}}> */}
        <FlatList
        nestedScrollEnabled={true}
          contentContainerStyle={{ justifyContent: "space-around",paddingRight:widthPercentageToDP(4) }}
          horizontal={true}
          data={arr}
          renderItem={({ item, index }) => <Block item={item} index={index} />} />
      {/* </View> */}


      <Text style={{ fontWeight:"500", fontSize: 18, color: appColors.black,marginLeft:15,marginTop:20 }}>New Arrivals</Text>
      <View style={{marginTop:10}}>
        <FlatList
        nestedScrollEnabled={true}
          data={arr2}
          renderItem={({ item, index }) => <Block2 item={item} index={index} />}
        />
      </View>
      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
  imageView: {
    height: heightPercentageToDP(14),
    width: "95%",
    alignSelf: "center",
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: heightPercentageToDP(2)
  },
  firstTitle: {
    fontFamily: AppFonts.Semibold,
    fontSize: 16,
    color: appColors.black
  },
  secondTitle: {
    fontFamily: AppFonts.Semibold,
    fontSize: 16,
    color: appColors.blue

  },
  bottalView: {
    height: heightPercentageToDP(12),
    width: 70,
    resizeMode: "contain"
  },
  bottalName: {
    fontSize: 16,
    fontWeight:'600',
    color: appColors.black
  },
  parentContainer: {
    marginTop:heightPercentageToDP(1),
   paddingHorizontal:widthPercentageToDP(4),
    marginLeft:widthPercentageToDP(4),
    borderRadius: 10,
    marginBottom: 10,
    padding:10,
    alignSelf:"center",
    backgroundColor: appColors.white,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  boxView: {
    width: "92%",
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: appColors.white,
    borderRadius: 10,
    // padding: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    margin: 5,
    alignSelf: "center"
  },
  heart_Icon: {
    height: heightPercentageToDP(3),
    width: heightPercentageToDP(3),
    resizeMode: "contain"
  },
  winBattaleView: {
    height: heightPercentageToDP(7),
    width: heightPercentageToDP(7),
    resizeMode: "contain"
  },
  bottalPrice:{
    color:appColors.blue,
    fontWeight:"600",
    fontSize:18,
    marginTop:5
  },
  bottaTtitle:{
    color:appColors.grey,
    fontWeight:"400"
  }
})