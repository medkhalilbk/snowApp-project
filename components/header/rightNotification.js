import React from 'react'
import { View, Text } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

function RightNotification({ navigation }) {

  async function logOut() {
    await SecureStore.setItemAsync("user", "loged out");
    navigation.navigate('Auth')
  }
  return (
    <View
      style={{
        marginRight: 12,
        marginTop: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      <FontAwesome name="power-off" size={24} color="#FF6624" onPress={() => { logOut() }} />

    </View>
  );
}

export default RightNotification;