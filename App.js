import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserProvider } from './UserContext';

// Telas
import LoginAlunoScreen from './loginAluno';
import LoginAdminScreen from './loginAdmin';
import MainLayout from './MainLayout';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen 
            name="LoginAluno" 
            component={LoginAlunoScreen} 
          />

          <Stack.Screen
            name="LoginAdmin"
            component={LoginAdminScreen}
          />

          <Stack.Screen 
            name="Main" 
            component={MainLayout} 
          />

        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
