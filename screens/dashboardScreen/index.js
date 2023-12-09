import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import MapScreen from "../../routes/Dashboard/mapScreen";
import OperationScreen from "./OperationScreen";
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from "@expo/vector-icons";
import RightNotification from "../../components/header/rightNotification";

 

const Tab = createBottomTabNavigator();

export default function DashboardScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Carte"
        component={OperationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarStyle: { backgroundColor: "#32363F" },
          headerStyle: {
            backgroundColor: "#32363F",
            elevation: 0,
          },
          headerTitle: "",
          title: "Tableau de bord",
          headerLeft: () => (
            <View
              style={{
                marginLeft: 12,
                marginTop: 6,
              }}
            >
              <Feather name="settings" size={28} color="white" />
            </View>
          ),
          headerRight: () => <RightNotification />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={MapScreen}
        options={{
          tabBarStyle: { backgroundColor: "#32363F" },
          headerStyle: {
            backgroundColor: "#32363F",
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="map-marker" size={size} color={color} />
          ),
          title: "Carte",
          headerTitle: "",

          headerLeft: () => (
            <View
              style={{
                marginLeft: 12,
                marginTop: 6,
              }}
            >
              <Feather name="settings" size={28} color="white" />
            </View>
          ),
          headerRight: () => <RightNotification />,
        }}
      />
    </Tab.Navigator>
  );
}
