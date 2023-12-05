import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { styles } from '../../styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const regSpecialChar = new RegExp(/[^a-zA-Z0-9]/);
    const regNumber = new RegExp(/\d/);
    const regUppercase = new RegExp(/[A-Z]/);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    React.useEffect((
    
    ) => {}, [password,secondPassword]);
    return (
      <View style={styles.containerLogin}>
        <View style={styles.loginFormContainer}>
          <Image
            style={styles.imageLogin}
            source={require("../../assets/resetPassword.png")}
          />

          <Text style={styles.textInResetPassword}>
            Saisir un nouveau mot de passe
          </Text>

          <View style={styles.containerOfList}>
            <Text style={styles.listOfItems}>
              Votre nouveau mot de passe doit contenir :{" "}
            </Text>

            <Text
              style={
                regSpecialChar.test(password)
                  ? styles.activeItem
                  : styles.listItem
              }
            >
              • Un caractère spécial
            </Text>

            <Text
              style={password.length >= 8 ? styles.activeItem : styles.listItem}
            >
              • +8 caractères{" "}
            </Text>

            <Text
              style={
                regNumber.test(password) ? styles.activeItem : styles.listItem
              }
            >
              • Un numéro
            </Text>

            <Text
              style={
                regUppercase.test(password)
                  ? styles.activeItem
                  : styles.listItem
              }
            >
              • Une lettre majuscule
            </Text>
            <Text
              style={
                password == secondPassword && password !== ""
                  ? styles.activeItem
                  : styles.listItem
              }
            >
              • Correspendance
            </Text>
          </View>
          <View>
            <View
              style={[styles.containerOfPasswordInput, { marginBottom: "3%" }]}
            >
              <TextInput
                secureTextEntry={!showPassword}
                style={[{ color: "white" }, { width: 140 }]}
                placeholder="Mot de passe"
                value={password}
                placeholderTextColor={"rgba(117, 119, 132, 0.5)"}
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
            <View style={styles.containerOfPasswordInput}>
              <TextInput
                secureTextEntry={!showPassword}
                style={[{ color: "white" }, { width: 140 }]}
                value={secondPassword}
                placeholder="Mot de passe"
                placeholderTextColor={"rgba(117, 119, 132, 0.5)"}
                onChangeText={(v) => setSecondPassword(v)}
              />
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#aaa"
                style={{ marginLeft: 92 }}
                onPress={toggleShowPassword}
              />
            </View>
          </View>
        </View>
      </View>
    );
}

export default NewPassword