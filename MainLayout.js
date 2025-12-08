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
      color: "rgb(244, 11, 93)",
    },


    headerStyle: {
      backgroundColor: "pink",
      shadowColor: "rgb(244, 11, 93)",
      shadowRadius: 9,
    },

    headerTintColor:  "rgb(244, 11, 93)", // cor do texto e dos 3 traços na barra superior
    
  }}
>

      <TopTab.Screen // o que estiver aq vai aparecer como uma tela e um botão para abrir uma barra para outras telas
        name="Home"
          component={Tabs} 
            options={{ tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={28} color="rgb(244, 11, 93)"/>
            </TouchableOpacity>
          )}}/>

      <TopTab.Screen // o que estiver aq vai aparecer como uma tela e um botão para abrir uma barra para outras telas
        name="Perfil"
          component={PerfilScreen} 
            options={{ tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={28} color="rgb(244, 11, 93)" />
            </TouchableOpacity>
          )}}/>

      <TopTab.Screen // o que estiver aq vai aparecer como uma tela e um botão para abrir uma barra para outras telas
        name="Carrinho"
          component={CarrinhoScreen} 
            options={{ tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={28} color="rgb(244, 11, 93)" />
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
