import React, { useState } from 'react'
import { Button, Image, Pressable, Text, TextInput, View } from 'react-native'
import { mainColor, whiteColor } from '../../styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { styles } from '../../styles'

function LoginScreen() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View style={styles.containerLogin}>
            <Image source={require('../../assets/logoColored.png')}
                style={styles.imageLogin}
                resizeMode="contain"
            />
            <TextInput
                style={styles.emailInput}
                placeholder="Email"
                placeholderTextColor="rgba(117, 119, 132, 0.5)"
            />
            <View style={styles.containerOfPasswordInput}>
                <TextInput
                    secureTextEntry={!showPassword}
                    style={{ width: 140, }}
                    placeholder="Mot de passe"
                    placeholderTextColor="rgba(117, 119, 132, 0.5)"

                />
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#aaa"
                    style={{ marginLeft: 92 }}
                    onPress={toggleShowPassword}
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center', width: 250, marginBottom: '7%', marginTop: '4%' }}>
                <Checkbox
                    style={{
                        marginRight: 12,
                        width: 14,
                        height: 14
                    }}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? mainColor : undefined}
                />
                <Text style={{ color: '#616161', fontSize: 12, fontWeight: 300, }} >Gardez-moi connecté</Text>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center', justifyContent: 'space-between', width: 250 }}>
                <Pressable style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 14,
                    borderRadius: 4,
                    backgroundColor: mainColor,
                }} >
                    <Text style={{
                        fontSize: 13,
                        lineHeight: 21,
                        fontWeight: 400,
                        color: 'white',
                    }}>Se connecter</Text>
                </Pressable>
                <Pressable >
                    <Text style={{ color: mainColor, fontSize: 12, fontWeight: 400, }} >Mot de passe oublié?</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default LoginScreen