import { View,Text } from "native-base";
import { Button, FlatList } from "react-native";
import Item from '../AllOfItems/Item'
export default function ItemList({restaurants,filteredRestos, handleCategoryPress, navigation}) {
    return(

          <View>
            {
              restaurants.map((item)=> {
                return  <Item navigation={navigation}  item={item} key={item._id}/>
              })
              /* filteredRestos.map((item)=> {
                return <Item navigation={navigation} item={item} key={item.id}/>
              } ) */
            } 
          </View>
          )};