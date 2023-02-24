import { View, StyleSheet, ImageBackground  } from "react-native";
import {Button, Text,  Stack,Box } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Link } from "react-router-native";
export default function Loguin() {
   
    return (
        <ImageBackground style={styles.img}  imageStyle={{opacity:0.7}} source={{uri:'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center', opacity:3}}>
            <Text style={{fontWeight:'bold',color:'#991b1b', alignSelf:'flex-start', fontSize:30, paddingTop:200, paddingLeft:25}}>
                RESERV
                </Text>
            <Text style={{fontWeight:'bold',color:'white', alignSelf:'flex-start', fontSize:23, paddingLeft:25}}>
                ¿Dónde vas a comer hoy?</Text>
            <Stack mt='3' direction={{base: "column",md: "row"}}  space={4}>
            <Link to='/carrusel1'>
                <Box bg='muted.100' rounded='5' pt='3' pb='3' px='6' style={{justifyContent:'center', flexDirection:'row'}}>
                    <Text style={{paddingRight:10}}>Iniciar sesión con </Text>
                    <Text>
                    <AntDesign name="facebook-square" style={{color:'blue', fontSize:20}} />
                    </Text>
                </Box>
            </Link>
            </Stack>
            <Stack mt='3' direction={{base: "column",md: "row"}}  space={4}>
            <Link to='/carrusel1'>
                <Box bg='muted.100' rounded='5' pt='3' pb='3' px='6' style={{justifyContent:'center', flexDirection:'row'}}>
                    <Text color='black' style={{paddingRight:10}}> Iniciar sesión con</Text>
                    <Text>
                    <MaterialCommunityIcons name="gmail" style={{color:'red', fontSize:20}} />
                    </Text>
                    
                </Box>
            </Link>
            </Stack>
            <Stack mt='3' direction={{base: "column",md: "row"}}  space={4}>
            <Link to='/carrusel1'>
                <Box bg='muted.100' rounded='5' pt='3' pb='3' px='6' style={{justifyContent:'center', flexDirection:'row'}}>
                    <Text color='black' style={{paddingRight:7}}> Iniciar sesión con </Text>
                    <Text>
                    <AntDesign name="apple1" style={{color:'black', fontSize:20}} />
                    </Text>
                </Box>
                </Link>
            </Stack>
            <Stack mt='3' direction={{base: "column",md: "row"}}  space={4}>
                <Button bg='muted.100'>
                    <Text color='black'> Otro </Text>
                </Button>
            </Stack>
        </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    img: {
        width:'100%',
        height:'100%',
        backgroundColor:'black'
    },
    button: {
      flex:1,
      flexDirection:'row'
    }
})