import { Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles'

export default function RadioButtons({options, onPress, style, edgeColor}) {

    const[value, setValue] = useState();

    const handleClick = (chosen) => {
        setValue(chosen);
        onPress(chosen);
    }
    return (
        <>
        {
            options.map((radioItem, index) => (
                <View key={index} style={[styles.radioBtnContainer]}>
                    <Text style={styles.radioLabel}>{radioItem.label}</Text>
                    <Pressable style={[styles.radioDot,edgeColor]} onPress={() => handleClick(radioItem.value)}>
                        {value === radioItem.value && <View style={[styles.dotChecked,style]}></View> }
                        </Pressable>
                </View>
            ))
        }
        </> 
    )
  }
