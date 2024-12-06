import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Login from '../screens/Login'
import Counter from '../screens/Counter';
import Home from '../screens/Home'

const AppNavigation = () => {
    const Stack = createNativeStackNavigator()
    // const userData = false;
    const {userData} = useSelector(state => state.auth)
  return (
    <NavigationContainer >
        <Stack.Navigator >
            {
                userData?
                <Stack.Screen name='Home' component={Home} />:
                <Stack.Screen name='Login' component={Login} />
            }
        </Stack.Navigator>
    </NavigationContainer>
    
    // <NavigationContainer initialState={Login}>
    //     <Stack.Navigator>
    //         {
    //             userData ? (
    //                 <Stack.Group>
    //                     {/* <Stack.Screen name='root' component={TabNavigation}/> */}
    //                     {/* <Stack.Screen name='SingleProduct' component={SingleProduct}/> */}
    //                     {/* <Stack.Screen name='Cart' component={CartScreen}/> */}
    //                 </Stack.Group>
    //             ) : (
    //                 <Stack.Group>
    //                     <Stack.Screen name='Login' component={Login} />
    //                     // {/* <Stack.Screen name='CounterScreen' component={Counter}/> */}
    //                 </Stack.Group>
    //             )}
    //     </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default AppNavigation;
const styles = StyleSheet.create({})