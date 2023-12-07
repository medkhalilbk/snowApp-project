import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import MapScreen from "../../routes/Dashboard/mapScreen";
import OperationScreen from "./OperationScreen";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function DashboardScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Carte"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="map-marker" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="Settings" component={OperationScreen}
        options={{
          headerStyle: {
            backgroundColor: '#32363F'
          },
          title: "",
          headerLeft: () => (
            <View style={{
              marginLeft:12,
              marginTop:6
            }}>
              <Feather name="settings" size={28} color="white" />
            </View>
          ),
          headerRight: () => (
            <View style={{
              marginLeft:12,
              marginTop:6,
              display:"flex",
              flexDirection:"row"
            }}>
              <Ionicons name="notifications-outline" size={28} color="white" />
              <View><Text>2</Text></View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
