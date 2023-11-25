import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { mainColor, whiteColor } from '../../styles'

const SplashScreen = ({ navigation }) => {
; return (
        <View style={{ flex: 1, backgroundColor: "#2D57A3", justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/logoWhite.png')}
                style={{ width: 250, height: 250, marginBottom: '30%' }}
                resizeMode="contain"
            />
            <ActivityIndicator color={whiteColor} size={79} />
        </View>
    )
}

export default SplashScreen