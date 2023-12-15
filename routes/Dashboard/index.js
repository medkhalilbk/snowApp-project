
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../../screens/dashboardScreen"; 
import { updateLocation } from "../../redux/actions/gps";
import { useDispatch } from "react-redux";
import * as Location from "expo-location";

const Stack = createStackNavigator();

export default function DashboardStack() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    setInterval(() => {
              Location.getCurrentPositionAsync({}).then((data) => {   dispatch(updateLocation(data));}); 
           }, 2000);
       
      }, []);
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
