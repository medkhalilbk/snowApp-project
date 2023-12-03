import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { styles } from '../../styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    return (
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
                    Votre nouveau mot de passe doit contenir :     </Text>

                <Text style={styles.listItem}>
                    • Un caractère spécial
                </Text>

                <Text style={styles.listItem}>
                    • Un numéro
                </Text>

                <Text style={styles.listItem}>
                    • Une lettre majuscule
                </Text>

            </View>
            <View style={styles.ResetPassword}>
            <TextInput
              secureTextEntry={!showPassword}
              style={{ width: 140 }}
              placeholder="Mot de passe"
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
        </View>
    )
}

export default NewPassword