import { View,Text } from "native-base";
import { useState, useEffect, useMemo } from "react";
import ItemList from '../AllOfItems/ItemList'
import { restaurantes} from '../mock/mockRestaurant'
import CategoryScroll from "./CategoryScroll";
export default function ItemListContainer({navigation}) {
    
   const [category, setCategory] = useState(null);
   const filteredRestos = useMemo(() => {
     return category ? restaurantes.filter(product => product.categoria === category) : restaurantes;
   }, [category, restaurantes]);
 
   const handleCategoryPress = selectedCategory => {
     setCategory(selectedCategory);
   };

    return (

        <View>
            <CategoryScroll handleCategoryPress={handleCategoryPress}/>
            <ItemList navigation={navigation} filteredRestos={filteredRestos} />
        </View>
    
          
    )
}