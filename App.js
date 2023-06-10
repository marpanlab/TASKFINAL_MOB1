import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './pages/Login/index'
import Routes from './routes/Routes'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Routes" component={Routes} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

