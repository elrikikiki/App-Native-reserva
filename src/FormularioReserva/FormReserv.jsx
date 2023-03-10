import React, { useState } from 'react'
import { Box, View, Center, CheckIcon, Text, Select } from 'native-base'
import { Button, Modal, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Calendar } from 'react-native-calendars'

const FormReserv = ({navigation}) => {
    const [service, setService]=useState('')
    const [showModal, setShowModal] =useState(false)
  return (
    <View>
        <TouchableOpacity onPress={()=> setShowModal(true)} style={{backgroundColor:'red'}}>
        <Text>Calendario</Text>
        </TouchableOpacity>
        <Modal visible={showModal} animationType='fade'>
            <Calendar style={{borderRadius:10, elevation:4, margin:10}}
            onDayPress={date => {console.log(date);
            
            setShowModal(false)
            }}
            initialDate={'2023-03-01'}
            minDate={'2023-01-01'}
            maxDate={'2023-06-01'}
            />
        </Modal>
        </View>
     /*  <Center>
      <Box maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Cantidad de personas" 
        _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size="5" />}}
         mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="1 persona" value="ux" />
          <Select.Item label="2 personas" value="web" />
          <Select.Item label="3 personas" value="cross" />
          <Select.Item label="4 personas" value="ui" />
          <Select.Item label="5 personas" value="backend" />
        </Select>
      </Box>
    </Center> */
    
  )
}

export default FormReserv