import { View, Text,Button } from 'react-native'
import React from 'react'
import { useNavigation,NavigationContainer } from '@react-navigation/native'

const CategoryFilter = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Button title='Back' onPress={()=> navigation.goBack}/>
        {/* <Link to='/categoria/comidaMexicana'>
        <Text>Comida Mexicana</Text>
        </Link> */}
      
    </View>
  )
}

export default CategoryFilter