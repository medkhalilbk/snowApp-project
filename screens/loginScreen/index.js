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
function LoginScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [errorCatched, setErrorCatched] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
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
            style={[styles.emailInput, { borderColor: errorCatched ? 'red' : "#AFAFAF" }]}
            onChangeText={(v) => setEmail(v)}
            placeholder="Email"
            placeholderTextColor={errorCatched ? 'rgba(248, 109, 109, 0.71)' : "rgba(117, 119, 132, 0.5)"}
          />
          <View style={[styles.containerOfPasswordInput, { borderColor: errorCatched ? 'red' : "#AFAFAF" }]}>
            <TextInput
              secureTextEntry={!showPassword}
              style={{ width: 140 }}
              placeholder="Mot de passe"
              placeholderTextColor={errorCatched ? 'rgba(248, 109, 109, 0.71)' : "rgba(117, 119, 132, 0.5)"}
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
            style={{
              flexDirection: "row",
              marginTop: 12,
              alignItems: "center",
              width: 250,
              marginBottom: "7%",
              marginTop: "4%",
            }}
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
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              alignItems: "center",
              justifyContent: "space-between",
              width: 250,
            }}
          >
            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 12,
                paddingHorizontal: 14,
                borderRadius: 4,
                backgroundColor: mainColor,
              }}
              onPress={() => {
                loginRequest({ email, password }).then((res) => {
                  setErrorCatched(false);
                  dispatch(loginAction(res.data.user));
                  dispatch(updateTokenAction(res.data.tokens));

                })
                  .catch((err) => {
                    setErrorCatched(true)
                    if (err.toString() == "Error: Error: cannot save in localstorage") {
                      setErrorMessage("Error: cannot save in localstorage")
                    }
                  });
              }}
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
            <Pressable>
              <Text
                style={{ color: mainColor, fontSize: 12, fontWeight: 400 }}
              >
                Mot de passe oublié?
              </Text>
            </Pressable>
          </View>
          {errorCatched && (
            <Text style={{ color: "rgba(248, 109, 109, 1)", marginTop: 14, }}>
              {errorMessage ? errorMessage : "Il y a une erreur dans le mot de passe ou l'email."}
            </Text>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen