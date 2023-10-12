import React from 'react';
import 'react-native-gesture-handler'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { routes } from './routes';

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
      {routes.map((r, i) => (
        <Stack.Screen key={i} name={r.name} component={r.component}></Stack.Screen>
      ))}
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}