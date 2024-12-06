import { View, Text, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/features/counterSlice';
import React from 'react'

export default function Counter() {
    const count = useSelector(state => state.counter.value) 
    const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Increment' onPress={()=> dispatch(increment())}/>      
        <Button title='Decrement' onPress={()=> dispatch(decrement())}/>
        <Button title='Add 5' onPress={()=> dispatch(incrementByAmount(5))}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 10,
    },
  });