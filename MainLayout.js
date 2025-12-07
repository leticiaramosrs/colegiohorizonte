import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Tabs from './Tabs';
import PerfilAluno from './PerfilAluno';

const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabsWithMenu({ navigation }) {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#7b4949ff", height: 60,marginTop:35 },
      }}
    >
      <TopTab.Screen
        name="MenuButton"
          component={MainLayout} 
            options={{ tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={28} color="black" />
            </TouchableOpacity>
          )}}/>
    </TopTab.Navigator>
  );
}

export default function MainLayout() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      
      {/* Drawer fica oculto — só abre com o botão ☰ */}
      <Drawer.Screen name="App" component={TopTabsWithMenu} />
      <Drawer.Screen name="PerfilAluno" component={PerfilAluno} />

    </Drawer.Navigator>
  );
}
