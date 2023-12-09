import React from 'react'
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function RightNotification() {
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
      <Ionicons name="notifications-outline" size={30} color="white" />
      <View
        style={{
          backgroundColor: "#FF6624",
          width: 18,
          height: 18,
          borderRadius: 22,
          alignItems: "center",
          position: "absolute",
          left: 13,
        }}
      >
        <Text style={{ color: "#F5F5F5" }}>2</Text>
      </View>
    </View>
  );
}

export default RightNotification;