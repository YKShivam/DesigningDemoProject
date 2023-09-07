import { View, Text, Platform, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/AuthScreens/Home';
import Browser from '../screen/NonAuthScreen/Browser';
import favourite from '../screen/NonAuthScreen/favourite';
import Baskets from '../screen/NonAuthScreen/Baskets';
import Account from '../screen/NonAuthScreen/Account';
import appColors from '../constant/colors';
import Favourite from '../screen/NonAuthScreen/favourite';
import AppFonts from '../constant/fonts';

export default function BottamTab() {
    const Tab = createBottomTabNavigator();
    const Custom = ({ route }) => {
        return (
            {
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: Platform.OS == 'ios' ? 80 : 70,
                    backgroundColor: appColors.white,
                },
                tabBarIcon: (({ focused, color, size }) => {
                    switch (route.name) {
                        case "Home": {
                            return (
                                <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: Platform.OS == 'ios' ? 10 : 0 }}>
                                    <Image tintColor={focused ? '#0096FF' : null} source={require('../assets/home.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                                    <Text style={{ fontFamily: AppFonts.Semibold, fontSize: 14, color: focused ? '#0096FF' : 'black' }}>Home</Text>
                                </View>
                            )
                        }

                        case "Browser": {
                            return (
                                <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: Platform.OS == 'ios' ? 10 : 0 }}>
                                    <Image tintColor={focused ? '#0096FF' : null} source={require('../assets/search.png')} style={{ width: 30, height: 30, resizeMode: 'contain', }} />
                                    <Text style={{ fontFamily: AppFonts.Semibold, fontSize: 14, color: focused ? '#0096FF' : 'black' }}>Browser</Text>
                                </View>
                            )
                        }
                        case "Favourite": {
                            return (
                                <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: Platform.OS == 'ios' ? 10 : 0 }}>
                                    <Image tintColor={focused ? '#0096FF' : null} source={require('../assets/heart.png')} style={{ width: 30, height: 30, resizeMode: 'contain', }} />
                                    <Text style={{ fontFamily: AppFonts.Semibold, fontSize: 14, color: focused ? '#0096FF' : 'black' }}>Favourite</Text>
                                </View>
                            )
                        }
                        case "Baskets": {
                            return (
                                <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: Platform.OS == 'ios' ? 10 : 0 }}>
                                    <Image tintColor={focused ? '#0096FF' : null} source={require('../assets/shopping-cart.png')} style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: 'black' }} />
                                    <Text style={{ fontFamily: AppFonts.Semibold, fontSize: 14, color: focused ? '#0096FF' : 'black' }}>Baskets</Text>
                                </View>
                            )
                        }
                        case "Account": {
                            return (
                                <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: Platform.OS == 'ios' ? 10 : 0 }}>
                                    <Image tintColor={focused ? '#0096FF' : null} source={require('../assets/user.png')} style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: 'black' }} />
                                    <Text style={{ fontFamily: AppFonts.Semibold, fontSize: 14, color: focused ? '#0096FF' : 'black' }}>Account</Text>
                                </View>
                            )
                        }
                    }
                })

            }
        )
    }
    return (
        <Tab.Navigator screenOptions={Custom} initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Browser" component={Browser} />
            <Tab.Screen name="Favourite" component={Favourite} />
            <Tab.Screen name="Baskets" component={Baskets} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}