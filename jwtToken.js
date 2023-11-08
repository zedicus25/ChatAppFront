import * as SecureStore from 'expo-secure-store';

const tokenKey = 'token';

const setToken = async (token) => {
    await SecureStore.setItemAsync(tokenKey,token);
}

const getToken = async () => {
    return await SecureStore.getItemAsync(tokenKey);
}

const logOut = async () => {
    await SecureStore.setItemAsync(tokenKey,"");

}

const functions = {
    setToken: setToken,
    getToken: getToken,
    logOut: logOut
};

export default functions;