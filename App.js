//=============================================================
// Importações de navegação / Etc
//=============================================================

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './UserContext';

//=============================================================
// Telas Importadas
//=============================================================

import HomeScreen from './home';
import LoginComumScreen from './loginComum';
import LojaScreen from './loja';
import LoginadmScreen from './loginAdm';
import CarrinhoScreen from './carrinho';
import PerfilScreen from './Perfil';
import TicketScreen from './ticket';
import Usuarios from './usuarios';
import UsuariosCadastrados from './usuariosCadastrados'

//=============================================================
// Criação e nomeamento de Telas
//=============================================================

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="LoginComum" 
          component={LoginComumScreen} 
          />

        <Stack.Screen
          name="LoginDeAdm"
          component={LoginadmScreen}
          />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          />

          <Stack.Screen
          name="Carrinho"
          component={CarrinhoScreen}
          />

        <Stack.Screen 
          name="Loja" 
          component={LojaScreen} 
          />

          <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          />

        <Stack.Screen 
          name="Ticket" 
          component={TicketScreen} 
          />

        <Stack.Screen 
          name="Usuarios" 
          component={Usuarios} 
          />

        <Stack.Screen 
          name="UsuariosCadastrados" 
          component={UsuariosCadastrados} 
          />

      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
}
