import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { styles } from '../../styles'
import { TextInput } from 'react-native-gesture-handler'


export default function ForgetPassword({navigation}) {
    return (
      <View style={styles.containerLogin}>
        <View style={styles.loginFormContainer}>
          <Image
            style={styles.imageLogin}
            source={require("../../assets/forgot.png")}
          />
          <Text style={styles.textInForgetPassword}>
            Merci de nous fournir votre adresse email
          </Text>
          <Text style={styles.subtitleInForgetPassword}>
            Un email sera transféré vers cette adresse afin de réinitialiser
            votre mot de passe
          </Text>
          <TextInput
            style={[styles.emailInput, { borderColor: "transparent" }]}
            /* onChangeText={(v) => setEmail(v)}
            placeholder="Email"
            placeholderTextColor={errorCatched ? 'rgba(248, 109, 109, 0.71)' : "rgba(117, 119, 132, 0.5)"} */
          />
          <Pressable
            onPress={() => navigation.navigate("newPassword")}
            style={styles.buttonSeConnecter}
          >
            <Text style={styles.textSeConnecter}>Confirmer</Text>
          </Pressable>
        </View>
      </View>
    );
}