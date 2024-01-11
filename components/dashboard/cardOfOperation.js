import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { whiteColor } from '../../styles'
import { Ionicons, Feather } from '@expo/vector-icons';
export default function ClientDetail({ navigation, item, id, key }) {
  const [showAddresses, setShowAddresses] = useState(false);
  /*   const colorOfCheckedCard = isChecked ? "#2B2E36" : "#3F424B";
  const colorDecoOfCheckedCard = isChecked ? "#44C01D" : "#1DA1F2"; */

  function StreetComponent({ name, lng, lat }) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("dashboard", {
            screen: "mapScreen",
            params: { operationsCords: { longitude: lng ,latitude:lat} },
          });
         /*  console.warn( { longitude: lng ,latitude:lat}) */
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2B2E36",
      padding: 10,
      borderRadius: 8,
      marginVertical: 10,
      marginHorizontal:80
    },
    text: {
      color: "white",
      fontSize: 16,
      textAlign: "center",
    },
  });

  return (
    <View>
      <StreetComponent
        name={item?.streetName}
        lat={item?.clientAdresses[0].lat}
        lng={item?.clientAdresses[0].lng}
      />
    </View>
  );

  /* return (
    <TouchableOpacity
      onLongPress={() => {
        console.log("long press");
      }}
      onPress={() => {
        navigation.navigate("dashboard", {
          screen: "mapScreen",
          params: { operationsCords: cords },
        });
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          marginTop: 8,
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
  ); */
}
