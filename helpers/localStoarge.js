import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeData(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
        return true
    } catch (e) {
        throw new Error("cannot save in localstorage")
    }
}