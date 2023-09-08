import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/AuthScreens/Home';
import Browser from '../screen/NonAuthScreen/Browser';
import favourite from '../screen/NonAuthScreen/favourite';
import Baskets from '../screen/NonAuthScreen/Baskets';
import Account from '../screen/NonAuthScreen/Account';

export default function NonAuthStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Browser" component={Browser} />
            <Stack.Screen name="favourite" component={favourite} />
            <Stack.Screen name="Baskets" component={Baskets} />
            <Stack.Screen name="Account" component={Account} />


        </Stack.Navigator>
     


    )
}