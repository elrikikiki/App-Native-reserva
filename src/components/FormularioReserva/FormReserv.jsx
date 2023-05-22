import React, { useState } from "react";
import { View, Text, TextInput, Button } from 'react-native';
import { Calendar } from "react-native-calendars";
import AntDesign from "react-native-vector-icons/AntDesign";
import Axios from "../../api/Axios";
import moment from 'moment';

    const FormReserv = ({item}) => {
    const NEWRESERVATION_URL = `api/reservation/newReservation/${item._id}`; 
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [specificPetition, setSpecificPetition] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [reservStatus, setReservStatus] = useState('')
      
    const handleSubmit = async (e) => {
    e.preventDefault()
      try {
        await Axios.post(
          NEWRESERVATION_URL,
          JSON.stringify({
            "userId": "2132157441",
            "date": date,
            "user": "Santi Zanini",
            "time": time,
            "peopleQty": numOfPeople,
            "promotionCode": "no",
            /* "state": "active" */
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        )
         .then(function (response) {
          setReservStatus(response.data);
        }) 
      } catch (error) {
        console.log(error);
      }
    
    console.log({
    "restarurantId": item._id,
    "userId": "2132157441",
    "date": date,
    "user": "Angel Di María",
    "time": time,
    "peopleQty": numOfPeople,
    "promotionCode": "no",
    "petition": specificPetition //AVISARLE AL FAFA
    });
    };
  const handleDayPress = (day) => {
  const selectedDateObj = moment(day.timestamp).utc().startOf('day'); //tener en cuenta esto cuando subamos al servidor
  setSelectedDate(day.dateString);
  setDate(selectedDateObj.format('DD-MM-YYYY'));
  setSelectedTime('');
  setTime('');
  };

    const handleTimePress = (selectedTime) => {
      setSelectedTime(selectedTime);
      setTime(selectedTime);
    };
  
    return (
      <View>
        <Calendar
        style={{marginTop:30}}
          onDayPress={handleDayPress}
          markedDates={{ [selectedDate]: { selected: true } }}
        />
        <View style={{marginTop:10, alignItems:'center'}}>
          <Text>Horarios Disponibles</Text>
          <View style={{ flexDirection: 'row', marginTop:10 }}>
            <Button color={'#8b0000'} title="10:00 AM" onPress={() => handleTimePress('10')} />
            <Button color={'#8b0000'} title="12:00 PM" onPress={() => handleTimePress('12')} />
            <Button color={'#8b0000'} title="2:00 PM" onPress={() => handleTimePress('2')} />
            <Button color={'#8b0000'} title="4:00 PM" onPress={() => handleTimePress('4')} />
          </View>
        </View>
        <View style={{marginTop:10}}>
          <TextInput
            placeholder="Cantidad de Personas"
            keyboardType="numeric"
            onChangeText={(value) => setNumOfPeople(value)}
            value={numOfPeople}
          />
        </View>
        <View style={{marginTop:10}}>
          <TextInput
            placeholder="Dejar alguna petición en particular..."
            keyboardType="text"
            onChangeText={(value) => setSpecificPetition(value)}
            value={specificPetition}
          />
        </View>
        <View style={{ padding:40}}>
          <Button color={'#8b0000'} title="Enviar" onPress={handleSubmit} />
          <Alert></Alert>
          <Text>{reservStatus}</Text>
        </View>

      </View>
    );
  };

export default FormReserv;