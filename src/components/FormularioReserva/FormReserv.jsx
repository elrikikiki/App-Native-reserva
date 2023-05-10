import React, { useState } from "react";
import { View, Text, TextInput, Button } from 'react-native';
import { Calendar } from "react-native-calendars";
import AntDesign from "react-native-vector-icons/AntDesign";
import Axios from "../../api/Axios";
import moment from 'moment';

    /* const NEWRESERVATION_URL = "http://localhost:3500/api/reservation/newReservation"; */
    const NEWRESERVATION_URL = "api/restaurant/prueba";
    const FormReserv = ({item}) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    
    const handleSubmit = async (e) => {
    e.preventDefault()
    
      try {
        await Axios.post(NEWRESERVATION_URL, 
          JSON.stringify ({
            "prueba": "345"
            })
            );
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
    "promotion": "no"
    });
    };
  /* `Id: ${item.restarurantId}, Restaurant: ${item.name}, Date: ${date}, Time: ${time}, Number of People: ${peopleQty}` */
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
          onDayPress={handleDayPress}
          markedDates={{ [selectedDate]: { selected: true } }}
        />
        <View>
          <Text>Time</Text>
          <View style={{ flexDirection: 'row' }}>
            <Button title="10:00 AM" onPress={() => handleTimePress('10:00 AM')} />
            <Button title="12:00 PM" onPress={() => handleTimePress('12:00 PM')} />
            <Button title="2:00 PM" onPress={() => handleTimePress('2:00 PM')} />
            <Button title="4:00 PM" onPress={() => handleTimePress('4:00 PM')} />
          </View>
        </View>
        <View>
          <TextInput
            placeholder="Number of People"
            keyboardType="numeric"
            onChangeText={(value) => setNumOfPeople(value)}
            value={numOfPeople}
          />
        </View>
        <View>
          <Button title="Enviar" onPress={handleSubmit} />
        </View>
      </View>
    );
  };

export default FormReserv;
