import { View,Text } from "native-base";
import Item from '../AllOfItems/Item'
export default function ItemListContainer({restaurants}) {
    console.log(restaurants);
    return(
    <View pt='10'>
           {
            restaurants.map((resto)=> {
                return <Item resto={resto} key={resto.id}/>
            })
           }
    </View>       
    )
}