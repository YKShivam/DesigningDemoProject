import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/AuthScreens/Splash';
import Wellcome from '../screen/AuthScreens/Wellcome';
import Login from '../screen/AuthScreens/Login';

export default function NonAuthStack() {
    const Stack = createNativeStackNavigator();
    return (
        // <Stack.Navigator>
        //     <Stack.Screen name="Splash" component={Splash} />
        //     <Stack.Screen name="Home" component={Home} />
        //     <Stack.Screen name="Wellcome" component={Wellcome} />
        //     <Stack.Screen name="Login" component={Login} />

        // </Stack.Navigator>
        <View>
            <Text>jdkfh</Text>
        </View>


    )
}