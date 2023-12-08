import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import AuthStack from "./routes/Auth"; 
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import DashboardStack from "./routes/Dashboard";

function App() {
  const store = configureStore();
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
