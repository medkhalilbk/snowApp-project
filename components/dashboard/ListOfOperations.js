import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, TextInput, TouchableOpacity, View } from 'react-native'
import CardOfOperation from './cardOfOperation'
import { styles } from '../../styles'
import { FontAwesome,AntDesign } from '@expo/vector-icons';

function ListOfOperations() {
    const { width, height } = Dimensions.get("window");

    return (
        <SafeAreaView style={{ flex: 2 }}>
            <View style={{
                alignItems: 'center',
                marginBottom: 20,
                flexDirection: 'row',
                gap: 12,
                paddingLeft: 12,
                paddingRight: 12

            }}>
                <TextInput
                    placeholder="Chercher une opération"
                    placeholderTextColor="white"
                    style={{
                        borderRadius: 5,
                        padding: 12,
                        fontSize: 12,
                        color: "white",
                        backgroundColor: "#2B2E36",
                        width: 250,
                        height: 38,
                        justifyContent: 'center'
                    }}
                />

                <TouchableOpacity
                    style={{
                        width: 31,
                        height: 30,
                        backgroundColor: "#44C01D",
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5

                    }}
                >
                    <FontAwesome name="search" size={17} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 31,
                        height: 30,
                        backgroundColor: "#1DA1F2",
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5

                    }}
                >
                    <AntDesign name="filter" size={17} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{
                paddingLeft: 20, gap: 20, paddingRight: 20
            }}>
                <CardOfOperation />
                <CardOfOperation />
                <CardOfOperation />
                <CardOfOperation />
                <CardOfOperation />
                <CardOfOperation />
                <CardOfOperation />

            </ScrollView>
        </SafeAreaView>
    )
}

export default ListOfOperations