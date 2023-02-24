import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import LogScreen from '../screens/LogScreen'
const Navigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    
    <NavigationContainer>
        
        <Stack.Navigator 
        screenOptions={{headerShown:false}}>
            <Stack.Screen 
            name='home'
            component={HomeScreen}
            />
             <Stack.Screen 
            name='hola'
            component={LogScreen}
            />
             <Stack.Screen 
            name='/categoria/comidaMexicana'
            component={LogScreen}
            /> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

