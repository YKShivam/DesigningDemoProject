import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/AuthScreens/Splash';
import Home from '../screen/AuthScreens/Home';
import Wellcome from '../screen/AuthScreens/Wellcome';
import Login from '../screen/AuthScreens/Login';

export default function AuthStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Wellcome" component={Wellcome} />
            <Stack.Screen name="Login" component={Login} />

        </Stack.Navigator>
    )
}