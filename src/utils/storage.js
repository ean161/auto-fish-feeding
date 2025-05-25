import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
    async set(key, value) {
        try {
            const json = JSON.stringify(value);
            await AsyncStorage.setItem(key, json);
        } catch (e) {
            console.error("Storage set error:", e);
        }
    },

    async get(key) {
        try {
            const json = await AsyncStorage.getItem(key);
            return json != null ? JSON.parse(json) : null;
        } catch (e) {
            console.error("Storage get error:", e);
            return null;
        }
    },

    async remove(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            console.error("Storage remove error:", e);
        }
    },

    async clear() {
        try {
            await AsyncStorage.clear();
        } catch (e) {
            console.error("Storage clear error:", e);
        }
    }
};

export default Storage;
