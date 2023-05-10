import { Image,Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import {Button,  View } from 'native-base'
import FormReserv from '../FormularioReserva/FormReserv'

const ItemDetail = ({item, navigation}) => {
  return (
    
    <ScrollView>
    <View style={{justifyContent:'center', alignItems:'center'}}>
     <Text style={{marginTop:30, fontSize:30, fontWeight:'bold'}}>{item.name}</Text>
     <Text style={{marginTop:10}}>{item.address}</Text>
     <Text style={{marginTop:10}}>{item.city}</Text>
     <Text style={{marginTop:10}}>{item.description}</Text>
     <Text style={{marginTop:10}}>{`TAGS: ${item.tags}`}</Text>
    </View>
    <View>
    <FormReserv navigation={navigation} item={item}/>
    </View>
    
    </ScrollView>
    
  )
}

export default ItemDetail