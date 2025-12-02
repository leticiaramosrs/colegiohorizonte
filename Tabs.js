import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';

import HomeScreen from './home';
import LojaScreen from './loja';
import TicketScreen from './ticket';
import PerfilScreen from './PerfilAluno';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'white', height: 70 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 8 },
      }}
    >

      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name="Loja"
        component={LojaScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="shopping-cart" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="ticket" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name="Configurações"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={30} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
