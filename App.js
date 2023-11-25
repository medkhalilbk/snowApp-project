import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import AuthStack from "./routes/Auth"; 
import configureStore from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
