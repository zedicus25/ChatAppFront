import axios from "axios";


const apiUrl = "http://bojom48927-001-site1.htempurl.com";


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


const getForecast = async() => {
    return await get(`${apiUrl}/WeatherForecast`);
}

const methods = {
    getForecast: getForecast,
}

export default methods;