import { View, Text } from 'react-native'
import React from 'react'

const ItemDetail = ({resto}) => {

  return (
    <View>
      <Text>
        {resto.nombre}
      </Text>
    </View>
  )
}

export default ItemDetail