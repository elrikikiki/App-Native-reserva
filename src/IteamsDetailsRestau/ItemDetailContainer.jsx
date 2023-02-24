import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { restaurantes} from '../mock/mockRestaurant'
import ItemDetail from '../IteamsDetailsRestau/ItemDetail'
const ItemDetailContainer = () => {
const [resto,setResto] = useState({})

  useEffect(()=> {
    const getRestaurant = ()=> {
      return new Promise((res, rej) => {
        const product = restaurantes.find((prod) => prod.id === '1');
        setTimeout(() => {
            res(product);
        }, 2000);
    });
    };
    getRestaurant()
    .then((res)=>{
     setResto(res);
    })
    .catch((error)=> {
     console.log(error);
    })
 },[]);
  return (
    <View>
      <Text>
    <ItemDetail resto={resto}/>
      </Text>
    </View>
  )
}

export default ItemDetailContainer