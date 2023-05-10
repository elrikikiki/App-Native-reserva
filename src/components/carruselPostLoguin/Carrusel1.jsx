import { Box } from 'native-base';
import React from 'react';
import {FlatList, Animated, StyleSheet,View, Image, Text, Dimensions} from 'react-native'
import { Link } from "react-router-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function Carrusel1() {
    
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const ANCHO_CONTENEDOR = width * 0.94
    const ESPACIO = 10;
    const ESPACIO_LATERAL = (width - ANCHO_CONTENEDOR /2)
    const ALTURA_BACKDROP = height *0.8;
    const imagenes = [
        {
            id:1,
            text:' EVITÁ HACER FILAS Y RESERVÁ DESDE NUESTRA APP', /**/
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
        function BackDrop (){
            return (
              <View style={
                ([{height: ALTURA_BACKDROP,  width, position: 'absolute',top:0}],
              StyleSheet.absoluteFillObject)
                }>
                {backgroundImg.map((imagen,index)=>{
                     const inputRange = [
                        (index -1) * ANCHO_CONTENEDOR,
                        index * ANCHO_CONTENEDOR,
                        (index + 1) * ANCHO_CONTENEDOR
                    ];
                    const outputRange = [ 0, 1, 0]
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange
                    });

                  return <Animated.Image source={{uri:imagen}}
                  key={index} 
                  style={[
                    {height:ALTURA_BACKDROP,  width,  position: 'absolute',top:0, opacity }]}
                  />
                })}
                <LinearGradient
                colors={['transparent','white']}
                style={{height:ALTURA_BACKDROP, width, position:'absolute',top:0}}
                />
              </View>
            )
          }
    return(
        <>
           <BackDrop/>
                <Animated.FlatList
                onScroll={Animated.event([
                    {nativeEvent:{contentOffset:{x:scrollX}}}
                ], {useNativeDriver:true})}
                data={imagenes}
                keyExtractor={(item=> item.id)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingTop:200}}
                decelerationRate={0}
                snapToInterval={ANCHO_CONTENEDOR}
                scrollEventThrottle={16}
                renderItem={({item,index})=> {
                    const inputRange = [
                        (index -1) * ANCHO_CONTENEDOR,
                        index * ANCHO_CONTENEDOR,
                        (index + 1) * ANCHO_CONTENEDOR,
                    ];
                    const outputRange = [ 0, -50, 0]
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange
                    });
                    return (
                    <View style={{width: ANCHO_CONTENEDOR}}>
                        <Animated.View style={{marginHorizontal: ESPACIO, padding:ESPACIO, 
                            borderRadius: 34, backgroundColor:'black', alignItems:'center',
                            transform: [{translateY}]
                            }}>
                        <Image source={{uri:item.img}} style={styles.posterImage}/>
                        <Text style={{color:'white', paddingVertical:10, fontWeight:'bold', fontSize:17, textAlign:'center',textTransform:'uppercase'}} >{item.text}</Text>
                        </Animated.View>
                    </View>
                    )
                }}
                />
             <View style={{justifyContent:'center',alignItems:'center'}}>
                <Link to='/main'>
                <Box bgColor='error.600' rounded='6' paddingX='8' paddingY='3'>
                <Text style={{color:'white', fontWeight:'bold'}}>CONTINUAR</Text>
                </Box>
                </Link>
           </View>
        </> 
    )
}
const styles = StyleSheet.create({
    posterImage: {
        width:'100%',
        height: 200,
        resizeMode:'cover',
        borderRadius:24,
        margin:0,
        marginBottom:10,
    }
})