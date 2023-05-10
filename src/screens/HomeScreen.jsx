import { ScrollView, View } from 'react-native'
import React from 'react'
import Main from '../components/main/Main'
import { Button } from 'react-native'
import AppBar from '../components/AppBar/AppBar'


const HomeScreen = ({navigation}) => {
  
  return (
    <>
    <View >
      <AppBar/>
    </View>
    <View style={{flex:1}}>
      <Main navigation={navigation}/> 
    </View>

    </>
   
  )
}

export default HomeScreen