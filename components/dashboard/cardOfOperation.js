import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { whiteColor } from '../../styles'
import { Ionicons, Feather } from '@expo/vector-icons'; 


export default function CardOfOperation({
  navigation,
  id,
  title,
  addresse,
  description,
  time,
  start_date,
  start_hour,
  isDone,
  cords,
}) {
  const [isChecked, setChecked] = useState(isDone == 1 ? true : false);
  const colorOfCheckedCard = isChecked ? "#2B2E36" : "#3F424B";
  const colorDecoOfCheckedCard = isChecked ? "#44C01D" : "#1DA1F2";
 
  return (
    <TouchableOpacity onLongPress={() => {
      console.log("long press")
    }} onPress={() => {
      navigation.navigate("dashboard", {
        screen: "mapScreen",
        params: { operationsCords: cords },
      });
    }} >
      <View
        style={{
          marginHorizontal:12,
          marginTop:8,
          paddingTop: 8,
          paddingLeft: 12,
          paddingRight: 12,
          backgroundColor: colorOfCheckedCard,
          borderRadius: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ color: whiteColor }}>{title}</Text>
          <Checkbox
            value={isChecked}
            onValueChange={isDone == 0 ? setChecked : null}
            style={{ borderColor: colorDecoOfCheckedCard, borderWidth: 0.7 }}
          />
        </View>
        <View
          style={{
            borderBottomColor: colorDecoOfCheckedCard,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <View style={{ paddingTop: 15 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Ionicons name="calendar-sharp" size={24} color="white" />
            <Text style={{ color: whiteColor }}>{start_date} </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Ionicons name="location-outline" size={24} color="white" />
            <Text style={{ color: whiteColor }}>{addresse}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Feather name="file-text" size={24} color="white" />
            <Text style={{ color: whiteColor }}>{description}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
