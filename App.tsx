import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/route/MainStack'

export default function App() {
  return (
    <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    // <View style={{flex:1}}>
    //   <MainStack/>

    // </View>
  )
}
