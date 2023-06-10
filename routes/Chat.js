import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatGlobal from '../pages/Chat/index';

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerStyle: { backgroundColor: '#F8A8B5' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
    <Stack.Screen
        name="Home"
        component={ChatGlobal}
        options={{ title: 'Chat Global' }}
      />
    </Stack.Navigator>
  );
}

export default ChatStack;
