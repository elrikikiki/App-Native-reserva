import { View, StyleSheet, TextInput } from "react-native"
import { Button,Input,Text, Stack } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function AppBar() {
    return(
        <SafeAreaView style={styles.contenedor}>
            <Text color='white'>
                <AntDesign name='user' style={{fontSize:20}}/>
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Cocina, nombre del restaurante..."
            />
            <Text color='white'>
               8 <MaterialCommunityIcons name='star-four-points' style={{fontSize:20}} />
            </Text>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#991b1b',
        paddingBottom:10, 
        paddingTop:10,
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center'
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor:'white',
        paddingHorizontal:30,
        backgroundColor:'white',
        borderRadius:30
      }
   
})