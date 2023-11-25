import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/splashScreen";
import LoginScreen from "../../screens/loginScreen";
const Stack = createStackNavigator();
import React from "react";
import { useSelector } from "react-redux";
export default function AuthStack({ navigation }) {
const [isLoading, setIsLoading] = React.useState(true)

  
  const userInfos = useSelector((state) => state.user);  
  
  React.useEffect(() => {
console.log(userInfos);
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, [])
   
  return (
    <Stack.Navigator>
      {isLoading && (
        <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      )}
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
