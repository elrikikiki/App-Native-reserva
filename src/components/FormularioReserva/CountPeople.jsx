import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const CountPeople = () => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeSelect = (value) => {
    setSelectedTime(value);
  };

  return (
    <RNPickerSelect
      onValueChange={handleTimeSelect}
      placeholder={{ label: 'Selecciona una hora', value: null }}
      items={[
        { label: '12:00 PM', value: '12:00 PM' },
        { label: '1:00 PM', value: '1:00 PM' },
        { label: '2:00 PM', value: '2:00 PM' },
        { label: '3:00 PM', value: '3:00 PM' },
      ]}
    />
  );
};

export default CountPeople;