import { View, Text,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { restaurantes } from '../mock/mockRestaurant';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemDetail from '../components/IteamsDetailsRestau/ItemDetail';
import axios from 'axios'
function DetailScreen({ route, navigation }) {
    const BASE_URL= 'http://192.168.100.175:3500/' //esto se modifica cuando compremos el hosting
    const axios1 = axios.create({
    baseURL: BASE_URL,});
    const { itemId } = route.params;
    const [restaurant, setRestaurant] = useState({});

    useEffect(()=>{
      const getTheRestaurant = async ()=>{
        try {
          const getRestaurant = await axios1.get('api/restaurant/getAllRestaurants')
          const data =  getRestaurant.data.find((item)=> item._id === itemId)
          setRestaurant(data);
        } catch (error) {
          console.log(error.data);
        }
      };
      getTheRestaurant()
      
    },[itemId]);
    
    return (
      <SafeAreaView>
         <ItemDetail navigation={navigation} item={restaurant}/>
      </SafeAreaView>
    );
  }

export default DetailScreen

/* 
const BASE_URL= 'http://192.168.100.175:3500/' //esto se modifica cuando compremos el hosting
    const axios1 = axios.create({
    baseURL: BASE_URL,
    });
    const { itemId } = route.params;
    const [restaurant, setRestaurant] = useState([]);
    useEffect(()=>{
      const getTheRestaurant = async ()=>{
        try {
          const getRestaurant = await axios1.get('api/restaurant/getAllRestaurants')
          setRestaurant(getRestaurant.data);
        } catch (error) {
          console.log(error.data);
        }
      };
      getTheRestaurant()
      console.log(restaurant);
    },[]);
    
      const item = restaurant.find((item) => item._id === itemId);  
      console.log(`esto es item ${item}`);

*/