import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';

//=============================================================
// Telas Importadas
//=============================================================

import HomeScreen from './home';
import LojaScreen from './loja';
import TicketScreen from './ticket';
import ConfirguracoesScreen from './configuracoes';

const Tab = createBottomTabNavigator();

// Produtos

export default function TabsScreen() {
  return (
    <Tab.Navigator 
      screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: { 
      backgroundColor: 'pink',
      height: 70,      
      shadowColor: "rgb(244, 11, 93)",
      shadowRadius: 9, },
      }}
    >

      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome6 name="house" size={32} color={"rgba(239, 71, 96, 1)"} />
          ),
        }}
      />

      <Tab.Screen 
        name="Loja"
        component={LojaScreen}
        options={{
          tabBarIcon: () => (
            <Foundation name="shopping-cart" size={32} color={"rgba(239, 71, 96, 1)"} />
          ),
        }}
      />

      <Tab.Screen 
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarIcon: () => (
            <Entypo name="ticket" size={32} color={"rgba(239, 71, 96, 1)"} />
          ),
        }}
      />

      <Tab.Screen 
        name="Configuracoes"
        component={ConfirguracoesScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="settings-outline" size={32} color={"rgba(239, 71, 96, 1)"} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}