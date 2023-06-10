import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home/index';
import ProfileScreen from '../pages/Home/Profile';
import PlayScreen from '../pages/Home/play'

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#F8A8B5' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Feed"
        component={Home}
        options={{ title: 'Meu Feed' }}
      />
      <Stack.Screen
        name="Play"
        component={PlayScreen}
        options={{ title: 'Assista agora' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Meu Perfil' }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
