import { View, Text } from 'react-native'
import React from 'react'

export default function CountryFlagView() {
    return (
        <Pressable
            onPress={() => {
                setIsVisible(true);
            }}
            style={style.countryContain}
        >
        </Pressable>
    )
}