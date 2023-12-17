import React, { useState } from 'react'
import { Button, Image, Pressable, Text, TextInput, View } from 'react-native'
import { mainColor, whiteColor } from '../../styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { styles } from '../../styles'
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';
import { loginRequest } from '../../axios/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, updateTokenAction } from '../../redux/actions/user';
import * as SecureStore from 'expo-secure-store';

function LoginScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [errorCatched, setErrorCatched] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  React.useEffect(() => { }, [errorMessage, errorCatched]);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  async function SaveInformation(res) {
    if (isChecked) {
      // console.log(res);
      const jsonString = JSON.stringify(res);
      await SecureStore.setItemAsync("user", jsonString);
      // let user = await SecureStore.getItemAsync("user");
      // let userObject = JSON.parse(user); 
      // console.log(userObject.email)
    } else {
// TODO: we should only save user in redux if he didnt check remember me  
    }
  }


  return (
    <KeyboardAvoidingView
      behavior={"height"}
      enabled={true}
      style={styles.containerLogin}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.loginFormContainer}>
          <Image
            source={require("../../assets/logoColored.png")}
            style={styles.imageLogin}
            resizeMode="contain"
          />
          <TextInput
            style={[
              styles.emailInput,
              { borderColor: errorCatched ? "rgba(248, 109, 109, 0.8)" : "transparent", },
            ]}
            onChangeText={(v) => setEmail(v)}
            placeholder="Email"
            placeholderTextColor={
              errorCatched
                ? "rgba(248, 109, 109, 0.8)"
                : "rgba(250, 250, 250, 0.4)"
            }
          />
          <View
            style={[
              styles.containerOfPasswordInput,
              {
                borderColor: errorCatched
                  ? "rgba(248, 109, 109, 0.8)"
                  : "transparent",
              },
            ]}
          >
            <TextInput
              secureTextEntry={!showPassword}
              style={{ width: 140, color: "white" }}
              placeholder="Mot de passe"
              placeholderTextColor={
                errorCatched
                  ? "rgba(248, 109, 109, 0.5)"
                  : "rgba(250, 250, 250, 0.4)"
              }
              onChangeText={(v) => setPassword(v)}
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              style={{ marginLeft: 92 }}
              onPress={toggleShowPassword}
            />
          </View>
          <View
            style={styles.checkBoxContainer}
          >
            <Checkbox
              style={{
                marginRight: 12,
                width: 14,
                height: 14,
              }}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? mainColor : undefined}
            />
            <Text style={{ color: "#616161", fontSize: 12, fontWeight: 300 }}>
              Gardez-moi connecté
            </Text>
          </View>
          <View style={styles.connectContiner} >
            <Pressable
              style={styles.buttonSeConnecter}
              onPress={() => {
                loginRequest({ email: email, password: password }).then((res) => {
                  SaveInformation(res.user);
                  dispatch(loginAction(res.user))
                  navigation.navigate("Dashboard");
                }).catch((err) => {
                  setErrorCatched(true);
                  setErrorMessage(JSON.stringify(err));
                })
              }
              }
            >
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 21,
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Se connecter
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("ForgetPassword")}>
              <Text style={{ color: mainColor, fontSize: 12, fontWeight: 400 }}>
                Mot de passe oublié?
              </Text>
            </Pressable>
          </View>
          {errorCatched && (
            <Text style={{ color: "rgba(248, 109, 109, 1)", marginTop: 14 }}>
              {errorMessage}
            </Text>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen