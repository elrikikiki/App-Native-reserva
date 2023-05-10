import { View, Text } from "native-base";
import { useState, useEffect } from "react";
import ItemList from "../AllOfItems/ItemList";
import CategoryScroll from "./CategoryScroll";
import Axios from "../../api/Axios";
export default function ItemListContainer({ navigation }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getAllRestaurants = async () => {
      try {
        const getRestaurants = await Axios.get(
          "api/restaurant/getAllRestaurants"
        );
        setRestaurants(getRestaurants.data);
      } catch (error) {
        console.log(error.data);
      }
    };
    getAllRestaurants();
  }, []);
  return (
    <>
      <View>
        <CategoryScroll /* handleCategoryPress={handleCategoryPress} */ />
      </View>
      <View>
        <ItemList navigation={navigation} restaurants={restaurants} />
      </View>
    </>
  );
}
