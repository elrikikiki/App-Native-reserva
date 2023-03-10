import { View, Text,Image} from 'react-native'
import React from 'react'
import { restaurantes } from '../mock/mockRestaurant';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemDetail from '../IteamsDetailsRestau/ItemDetail';

function DetailScreen({ route, navigation }) {
    const { itemId } = route.params;
    const item = restaurantes.find((item) => item.id === itemId);
    return (
      <SafeAreaView>
        <Text>hola</Text>
         <ItemDetail navigation={navigation} item={item}/>
      </SafeAreaView>
    );
  }

export default DetailScreen