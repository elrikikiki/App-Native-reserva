import { ScrollView } from "native-base"
import { Button } from "react-native"
import {  View} from "react-native"
import ItemListContainer from "../AllOfItems/ItemListContainer"
import CarruselPromos from "./CarruselPromos"
import CategoryFilter from "./CategoryFilter"
export default function Main({navigation}) {
    return (
        <> 
            <ScrollView >
                <Button title="mexico" onPress={()=>navigation.navigate('/categoria/comidaMexicana')}/>
                <Button title="lomiteria" onPress={()=>navigation.navigate('/categoria/lomiteria')}/>
            <CarruselPromos/>
            <CategoryFilter/>
            <ItemListContainer navigation={navigation}/>
            <Button title='Ir al loguin' onPress={()=> navigation.navigate('hola')} />
            </ScrollView>
        </>
       
    )
}