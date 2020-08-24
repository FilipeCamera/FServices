import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Cadastrar from './screens/Cadastrar';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{
            headerTitle: 'FServices',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontFamily: 'Cairo_700Bold', color: '#416CD9' },
            headerStyle: {elevation: 0},
            headerLeft: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
