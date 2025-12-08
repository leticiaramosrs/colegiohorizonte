import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserProvider, CardapioProvider } from './UserContext';

//=============================================================
// Telas Importadas
//=============================================================

import HomeScreen from './home';
import TabsScreen from './Tabs';
import LoginAlunoScreen from './loginAluno';
import LoginAdminScreen from './loginAdmin';
import MainLayout from './MainLayout';
import LojaScreen from './loja';
// import { CardapioProvider } from './CardapioContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <CardapioProvider>
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
      </CardapioProvider>
    </UserProvider>
  );
}
