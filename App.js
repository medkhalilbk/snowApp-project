import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import AuthStack from "./routes/Auth"; 
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import * as Location from "expo-location";
import DashboardStack from "./routes/Dashboard";

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
