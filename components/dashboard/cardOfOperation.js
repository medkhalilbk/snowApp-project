import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { whiteColor } from '../../styles'
import { Ionicons, Feather } from '@expo/vector-icons';


export default function CardOfOperation() {
    const [isChecked, setChecked] = useState();
    const colorOfCheckedCard= isChecked ?"#2B2E36" :"#3F424B";
    const colorDecoOfCheckedCard= isChecked ?"#44C01D" :"#1DA1F2";

    return (
        <View style={{
            paddingTop: 8, paddingLeft: 12, paddingRight: 12, backgroundColor: colorOfCheckedCard,
            borderRadius: 8,
        }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
                <Text style={{ color: whiteColor }}>Opération de déneigement pour le client 2</Text>
                <Checkbox
                 value={isChecked}
                 onValueChange={setChecked}
                    style={{ borderColor: colorDecoOfCheckedCard, borderWidth: 0.7 }}
                />

            </View>
            <View style={{ borderBottomColor: colorDecoOfCheckedCard, borderBottomWidth: StyleSheet.hairlineWidth, }} />

            <View style={{ paddingTop: 15 }}>
                <View style={{ flexDirection: "row", gap: 16, alignItems: 'center', marginBottom: 12 }}>
                    <Ionicons name="calendar-sharp" size={24} color="white" />
                    <Text style={{ color: whiteColor }}>Anomali Office </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 16, alignItems: 'center', marginBottom: 12 }}>
                    <Ionicons name="location-outline" size={24} color="white" />
                    <Text style={{ color: whiteColor }}>Anomali Office </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 16, alignItems: 'center', marginBottom: 12 }}>
                    <Feather name="file-text" size={24} color="white" />
                    <Text style={{ color: whiteColor }}>Rien </Text>

                </View>

            </View>
        </View>
    )
}
