import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";  
import configureStore from "./redux/store";
import * as Location from "expo-location";
import DashboardStack from "./routes/Dashboard";
import { Provider } from "react-redux";
function App() {
  const store = configureStore(); 
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
        {/* <AuthStack /> */}
        <DashboardStack/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
