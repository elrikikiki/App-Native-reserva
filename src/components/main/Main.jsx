import { ScrollView } from "native-base"
import { Button } from "react-native"
import ItemListContainer from "../AllOfItems/ItemListContainer"
import CarruselPromos from "./CarruselPromos"
export default function Main({navigation}) {
    return (
        <> 
        <ScrollView>
            <CarruselPromos/>
            <ItemListContainer navigation={navigation}/>
            {/* <Button title='Ir al loguin' onPress={()=> navigation.navigate('hola')} /> */}
            </ScrollView>
        </>
    )
}