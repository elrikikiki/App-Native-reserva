import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import AntDesign from "react-native-vector-icons/AntDesign";

const Calendary = ({ navigation, selectedDate, setSelectedDate }) => {
  const [showModal, setShowModal] = useState(false);
  /* const [selectedDate, setSelectedDate] = useState(''); */
  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <AntDesign name="calendar" style={{ fontSize: 40 }} />
        <Text>{selectedDate}</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="fade">
        <Calendar
          style={{ borderRadius: 10, elevation: 4, margin: 10 }}
          onDayPress={(date) => {
            handleDateSelect(date);
            setShowModal(false);
          }}
          initialDate={"2023-04-01"}
          minDate={"2023-01-01"}
          maxDate={"2023-06-01"}
          disableArrowLeft={true}
          /* markedDates={
              {
                '2023-03-16':{marked: true, selected:true}
              }
            }   */
        />
      </Modal>
    </View>
  );
};

export default Calendary;

/* import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import { Calendar } from 'react-native-calendars';

const FormWithCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState('');

  return (
    <Formik
      initialValues={{ email: '', password: '', date: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
          />
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
          />
          <TouchableOpacity onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
          <Calendar
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
              handleChange('date')(day.dateString);
            }}
            markedDates={{ [selectedDate]: { selected: true } }}
          />
        </View>
      )}
    </Formik>
  );
}; */
