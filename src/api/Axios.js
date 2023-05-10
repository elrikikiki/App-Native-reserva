import axios from 'axios'

//const BASE_URL= 'https://abgururewards.herokuapp.com/'
//const BASE_URL= 'https://aybgurusrewards.com/'
const BASE_URL= 'http://192.168.100.175:3500/'

export default axios.create({
    baseURL: BASE_URL,
});

 export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
}); 
