import { View, Text, Button } from 'react-native'
import React from 'react'
import Loguin from '../LogIn/Loguin'

const LogScreen = ({navigation}) => {
  return (
    <View>
      <Button title='Volver al home' onPress={()=> navigation.goBack('home')} />
    </View>
  )
}

export default LogScreen