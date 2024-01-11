import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";  
import { createStackNavigator } from "@react-navigation/stack";
import configureStore from "./redux/store";
import * as Location from "expo-location";
import DashboardStack from "./routes/Dashboard";
import { Provider } from "react-redux"; 
import AuthStack from "./routes/Auth";
function App() {
  const store = configureStore(); 
  
const Stack = createStackNavigator();
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      } 
    })();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
{/*           <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="Dashboard"
            component={DashboardStack}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
