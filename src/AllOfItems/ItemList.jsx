import { View,Text } from "native-base";
import { Button, FlatList } from "react-native";
import Item from '../AllOfItems/Item'
export default function ItemListContainer({filteredRestos, handleCategoryPress, navigation}) {
    return(

           
          <View pt='5'>
            {
              filteredRestos.map((item)=> {
                return <Item navigation={navigation} item={item} key={item.id}/>
              } )
            }
            
          </View>
         
    )
}