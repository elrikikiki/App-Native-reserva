import { View,  ScrollView } from 'react-native'
import React from 'react'
import { Text,Button } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

const CategoryScroll = ({handleCategoryPress}) => {
  return (
    
    <View style={{paddingHorizontal:10}}>
      <Text >Categories</Text>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <Button>
        <Text>Promos</Text>
      </Button>
      <Button>
        <Text>Descuentos</Text>
      </Button>
      </View>
      
      <ScrollView
      style={{marginTop:20}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      >
     <Button marginRight={3}  bgColor='error.600' color='red'>
        <Text>Filtros</Text>
     </Button>
      <Button 
      bgColor='transparent' borderWidth={1} borderColor='muted.300' borderRadius={50} pt='0' pb='0' paddingLeft={5} paddingRight={5} onPress={() => handleCategoryPress(null)}>
        <MaterialIcons name='restaurant' style={{fontSize:14, marginRight:30}} /> 
        <Text >
             Ver todo 
        </Text>
        
      </Button>
      
      <Button 
      bgColor='transparent' borderWidth={1} borderColor='muted.300' borderRadius={50} pt='0' pb='0' paddingLeft={5} paddingRight={5}
      onPress={() => handleCategoryPress('comidaMexicana')}>
        <Text>Mexicana</Text>
      </Button>
      <Button 
      bgColor='transparent' borderWidth={1} borderColor='muted.300' borderRadius={50} pt='0' pb='0' paddingLeft={5} paddingRight={5} onPress={() => handleCategoryPress('lomiteria')}>
      <Text>Lomitos</Text>
      </Button>
      </ScrollView>
      </View>
    
  )
}

export default CategoryScroll