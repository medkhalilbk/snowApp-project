
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../../screens/dashboardScreen";

const Stack = createStackNavigator();

export default function DashboardStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
}
