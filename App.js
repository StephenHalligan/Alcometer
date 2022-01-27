import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1,'bottle');
  const [time, setTime] = useState(1, 'hour');
  const [gender, setGender] = useState('male');
  const [alcLevel, setAlcLevel] = useState(0);

  const bottleAmount = Array();
  bottleAmount.push({label: '1 bottle', value: 1});
  bottleAmount.push({label: '2 bottles', value: 2});
  bottleAmount.push({label: '3 bottles', value: 3});
  bottleAmount.push({label: '4 bottles', value: 4});
  bottleAmount.push({label: '5 bottles', value: 5});

  const timeAmount = Array();
  timeAmount.push({label: '1 hour', value: 1});
  timeAmount.push({label: '2 hours', value: 2});
  timeAmount.push({label: '3 hours', value: 3});
  timeAmount.push({label: '4 hours', value: 4});
  timeAmount.push({label: '5 hours', value: 5});

  const genders = Array();
  genders.push({label: 'Male', value: 'male'})
  genders.push({label: 'Female', value: 'female'})

  return(
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setWeight(text)}
          placeholder="in kilograms"
          keyboardType='numeric'></TextInput>
      </View>
      <View style={styles.field}>
        <Text>Bottles</Text>
         <Picker style={styles.bottleAmount}
        onValueChange={(itemValue) => setBottles(itemValue)}
        selectedValue={bottles}
        >
          {bottleAmount.map((bottles,index) => (
            <Picker.Item key={index} label={bottles.label} value={bottles.value}/>
          ))
          }
        </Picker>
      </View>
      <View style={styles.field}>
      <Text>Gender</Text>
      <RadioForm
          style={styles.radio}
          buttonSize = {10}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}
        />
        <Text>{alcLevel.toFixed(0)}</Text>
      </View>
      {/* <Button onPress={calculate} title="Calculate"></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  field: {
    margin: 10,
  },
  input: {
    marginLeft: 10,
  },
  radio: {
    marginTop:10,
    marginBottom: 10,
  }
});