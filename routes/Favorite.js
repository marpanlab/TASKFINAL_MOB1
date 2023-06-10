import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Favorites from '../pages/Favorite/index';
import RankingScreen from '../pages/Favorite/ranking'


const Stack = createStackNavigator();

function RankingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerStyle: { backgroundColor: '#F8A8B5' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: 'Meus Favoritos' }}
      />
      <Stack.Screen
        name="Ranking"
        component={RankingScreen}
        options={{ title: 'Top 5 Global' }}
      />
    </Stack.Navigator>
  );
}

export default RankingStack;
