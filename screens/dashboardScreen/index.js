import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { FontAwesome } from "@expo/vector-icons";
import MapScreen from "../../routes/Dashboard/mapScreen";


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
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
