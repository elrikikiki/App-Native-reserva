import { View,Text } from "native-base";
import { useState, useEffect } from "react";
import ItemList from '../AllOfItems/ItemList'
import { restaurantes} from '../mock/mockRestaurant'
export default function ItemListContainer() {
    const [restaurants, setRestaurants] = useState([])
   
    useEffect(()=> {
       const getRestaurants = ()=> {
        return new Promise ((res,rej)=> {
            res(restaurantes)
        })
       };
       getRestaurants()
       .then((res)=>{
        setRestaurants(res);
       })
       .catch((error)=> {
        (error);
       })
    },[]);
    return(
    <View>
            <ItemList restaurants={restaurants}/>
    </View>       
    )
}