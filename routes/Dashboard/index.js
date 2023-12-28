
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../../screens/dashboardScreen";
import { HandShakeSocket, updateLocation } from "../../redux/actions/gps";
import { useDispatch } from "react-redux";
import * as Location from "expo-location";
import OperationDetailScreen from "../../screens/dashboardScreen/OperationDetailScreen";

const Stack = createStackNavigator();

export default function DashboardStack() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    HandShakeSocket(11)
    setInterval(() => {
      Location.getCurrentPositionAsync({}).then((data) => { dispatch(updateLocation(data)); });
    }, 2000);

  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="operationDetailScreen"
        component={OperationDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
