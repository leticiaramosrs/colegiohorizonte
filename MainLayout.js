import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

//=============================================================
// Telas Importadas
//=============================================================

import Tabs from './Tabs';
import PerfilScreen from './PerfilAluno';
import CarrinhoScreen from './carrinho';

const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabsWithMenu({ navigation }) {
  return (

<Drawer.Navigator
  screenOptions={{
    
    drawerStyle: {
      backgroundColor: "pink",
      width: 250,
      headerShown: false,
    },

    drawerLabelStyle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
    },


    headerStyle: {
      backgroundColor: "pink",
    },

    headerTintColor: "black",
    
  }}
>

      <TopTab.Screen // o que estiver aq vai aparecer como uma tela separada

        name="Menu"
          component={Tabs} 
            options={{ tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={28} color="black" />
            </TouchableOpacity>
          )}}/>

      <TopTab.Screen // o que estiver aq vai aparecer como uma tela separada
        name="Perfil"
          component={PerfilScreen} 
            options={{ tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={28} color="black" />
            </TouchableOpacity>
          )}}/>

      <TopTab.Screen // o que estiver aq vai aparecer como uma tela separada
        name="Carrinho"
          component={CarrinhoScreen} 
            options={{ tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={28} color="black" />
            </TouchableOpacity>
          )}}/>

      </Drawer.Navigator>
    
  );
}

export default function MainLayout() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      
      {/* Drawer fica oculto — só abre com o botão ☰ */}
      <Drawer.Screen name="App" component={TopTabsWithMenu} />
      <Drawer.Screen name="Perfil" component={PerfilScreen} />
      <Drawer.Screen name="Carrinho" component={CarrinhoScreen} />

    </Drawer.Navigator>
  );
}
