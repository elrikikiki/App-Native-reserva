import { Box } from 'native-base';
import React from 'react';
import {FlatList, Animated, StyleSheet,View, Image, Text, Dimensions, ImageBackground} from 'react-native'
import { Link } from "react-router-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function Carrusel1() {
    
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const ANCHO_CONTENEDOR = width * 0.9
    const ESPACIO = 3;
    const ESPACIO_LATERAL = (width - ANCHO_CONTENEDOR /2)
    const ALTURA_BACKDROP = height *0.8;
    const imagenes = [
        {
            id:1,
            text:' EVITÁ HACER  Y RESERVÁ DESDE NUESTRA APP', /**/
            img:'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id:2,
            text:' Podés cancelar tu reserva con un solo click ',
             /*  */
            img:'https://images.unsplash.com/photo-1517898078300-58d1b9edf4a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id:3,
            text:'Adquirí puntos y canjealos por descuentos exclusivos ', /* */
            img:'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        },
    
    ]
    const backgroundImg = [
        'https://images.unsplash.com/photo-1504718855392-c0f33b372e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://www.voydeviaje.com.ar/resizer/LO_vMtyMnri054bzeoe5Zrz7wSQ=/arc-anglerfish-arc2-prod-grupoclarin/public/3VZ3MVNIHNCFHMCI5ISYOOWRYQ.jpg'
        ]
        const scrollX = React.useRef(new Animated.Value(0)).current
    
    return(
        <>
                <Animated.FlatList
                onScroll={Animated.event([
                    {nativeEvent:{contentOffset:{x:scrollX}}}
                ], {useNativeDriver:true})}
                data={imagenes}
                keyExtractor={(item=> item.id)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingTop:20}}
                decelerationRate={0}
                snapToInterval={ANCHO_CONTENEDOR}
                scrollEventThrottle={5}
                renderItem={({item,index})=> {
                    const inputRange = [
                        (index -1) * ANCHO_CONTENEDOR,
                        index * ANCHO_CONTENEDOR,
                        (index + 1) * ANCHO_CONTENEDOR,
                    ];
                    const outputRange = [ 0, 0, 0]
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange
                    });
                    return (
                        
                    <View style={{width: ANCHO_CONTENEDOR}}>
                        <ImageBackground source={{uri:item.img}} style={{marginRight:20, marginLeft:5}}>
                        <Animated.View style={{marginHorizontal: ESPACIO, padding:ESPACIO, 
                            borderRadius: 70, alignItems:'center',
                            transform: [{translateY}]
                            }}>
                        <Text style={{color:'white', paddingVertical:10, fontWeight:'bold', fontSize:17, textAlign:'center',textTransform:'uppercase'}} >{item.text}</Text>
                        </Animated.View>
                        </ImageBackground>
                    </View>
                    
                    )
                }}
                />
            
        </> 
    )
}
const styles = StyleSheet.create({
    posterImage: {
        width:'50%',
        height: 50,
        resizeMode:'cover',
        borderRadius:24,
        margin:0,
        marginBottom:10,
    }
})