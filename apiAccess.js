import axios from "axios";
import token from "./jwtToken";


const apiUrl = "http://bojom48927-001-site1.htempurl.com/api";


const get = async (url) => {
    let res = [];
    await axios.get(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(function(response){
        if(response.status == '200'){
            res = response.data;
        }
        
    });
    return res;
}

const post = async(url, data) => {
    let res = {};

    await axios.post(url, JSON.stringify(data), {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token.getToken()
        }
    }).then(function(response) {
        if(response.data.token)
            token.setToken(response.data.token);
        res = response;
    }).catch(() => res = undefined); 
    return res;
}

//--------------------authorization--------------------
const signIn = async(login, password) => {
    return await post(`${apiUrl}/Authentication/login`, {Password: password, UserName: login});
}

const signUp = async(login, password) => {
    return await post(`${apiUrl}/Authentication/regUser`, {Password: password, UserName: login});
}

const methods = {
    signIn : signIn,
    signUp: signUp
};


export default methods;