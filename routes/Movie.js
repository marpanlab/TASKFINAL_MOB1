import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MovieScreen from '../pages/Movie/index';
import DetailScreen from '../pages/Movie/detail';


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
        name="Home"
        component={MovieScreen}
        options={{ title: 'Dorama Feed' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{ title: 'Detalhes' }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
