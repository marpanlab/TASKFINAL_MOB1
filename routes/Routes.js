import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeStack from './Home'
import MovieStack from './Movie';
import RankingStack from './Favorite';
import ChatStack from './Chat';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#FF6C77',
        inactiveTintColor: 'white',
        style: { backgroundColor: '#F8A8B5' },
        labelStyle: { display: 'none' }, 
      }}
    >

      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="MovieStack"
        component={MovieStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-open-play" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="RankingStack"
        component={RankingStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cards-heart" color={color} size={30}/>
          ),
        }}
      />

      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          tabBarIcon: ( { color }) => (
            <MaterialCommunityIcons name="message-reply-text" color={color} size={30} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default Routes;
