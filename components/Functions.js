import { Text, View, TextInput, Button, SafeAreaView, ScrollView, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React,{ useState} from 'react';

import styles from '../styles'
import RadioButtons from '../components/RadioButtons'

export default function App() {

  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0.00)

  const genderLabel=[
    {label: 'Male', value:'male'},
    {label: 'Female', value:'female'}
  ]

  const calculate = () => {
    const WeightNotFound = () =>  //Ilmoitus että paino täytyy syöttää että sovellusta voi käyttää
    Alert.alert(
      "Make sure you type in weight before trying to calculate"
    );

    const grams = ((bottles * 0.33) * 8 * 4.5) - ((weight / 10) * time);  //Laskukaava
    let result = null;

    if (weight === ''){ //Jos painoa ei annettu, annetaan rivillä 24 luotu ilmoitus
      WeightNotFound();
      return;
    }
    
    if (gender === 'male'){
      result = grams / (weight * 0.7);  //0.7 miehille
    } else {
      result = grams / (weight * 0.6);  //0.6 naisillie
    }

    if (result < 0){  //Laskettu tulos ei voi mennä alle 0 promillen
      result = 0;
    }

    setResult(result);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.header}>
          <Text style={styles.title}>Alcometer</Text>
        </View>

        <View>
          <Text style={styles.lesserTitle}>Weight</Text>
          <TextInput style={styles.field} value={weight.toString()} onChangeText={text => setWeight(text)} keyboardType='number-pad' placeholder='Input weight..'/>
        </View>

        <View>
        <Text style={styles.lesserTitle}>Bottles</Text>
        <Picker
            style={styles.picker}
            selectedValue={bottles}
            mode="dropdown"
            onValueChange={(value, itemIndex) =>
            setBottles(value)
            }>
            <Picker.Item label="1 bottle" value="1" />
            <Picker.Item label="2 bottles" value="2" />
            <Picker.Item label="3 bottles" value="3" />
            <Picker.Item label="4 bottles" value="4" />
            <Picker.Item label="5 bottles" value="5" />
            <Picker.Item label="6 bottles" value="6" />
            <Picker.Item label="7 bottles" value="7" />
            <Picker.Item label="8 bottles" value="8" />
            <Picker.Item label="9 bottles" value="9" />
        </Picker>
      </View>

            <View>
        <Text style={styles.text}>Time</Text>
        <Picker
            selectedValue={time}
            mode="dropdown"
            style={styles.picker}
            onValueChange={(itemValue) =>
            setTime(itemValue)
            }>
            <Picker.Item label="1 hour" value="1" />
            <Picker.Item label="2 hours" value="2" />
            <Picker.Item label="3 hours" value="3" />
            <Picker.Item label="4 hours" value="4" />
            <Picker.Item label="5 hours" value="5" />
            <Picker.Item label="6 hours" value="6" />
            <Picker.Item label="7 hours" value="7" />
            <Picker.Item label="8 hours" value="8" />
            <Picker.Item label="9 hours" value="9" />
            <Picker.Item label="10 hours" value="10" />
        </Picker>
      </View>

      <Text style={styles.lesserTitle}>Gender</Text>
      <View style={styles.radioBtn}>
        <RadioButtons options={genderLabel}
          onPress={(value)=> {setGender(value)}}
          style={{backgroundColor:'#000000'}}
          borderColor={{borderColor:'#000000'}}
          />
      </View>

      <Text style={styles.result}>{result.toFixed(2)}</Text>

      <Button title= 'Calculate' onPress={calculate}></Button>


      </ScrollView>
    </SafeAreaView>
  );
}
