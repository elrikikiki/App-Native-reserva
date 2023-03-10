import { Image,Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import {Button,  View } from 'native-base'
import FormReserv from '../FormularioReserva/FormReserv'

const ItemDetail = ({item, navigation}) => {
  return (
    
    <ScrollView>
    <View style={{justifyContent:'center', alignItems:'center'}}>
      <Image source={{uri:item.img}} style={{width:'100%', height:250}}/>
      <Text pt={5} fontSize={20} >
        {item.nombre}
      </Text>
      <Text pt={5}>
        {item.categoria}
      </Text>
      <Text pt={5}>
        {item.direccion}
      </Text>
      {/* <Button mt={20} onPress={() => navigation.navigate('')}>
        Reservá
      </Button> */}
    </View>
    <View style={{marginTop:20,alignItems:'center'}}>
      <Text>Haz tu reserva</Text>
      <Text><FormReserv navigation={navigation}/></Text>
    </View>
    </ScrollView>
    
  )
}

export default ItemDetail