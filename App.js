import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//=============================================================
// Telas
//=============================================================

import HomeScreen from './home';
import LoginComumScreen from './loginComum';
import LojaScreen from './loja';
import LoginadmScreen from './loginAdm';
import CarrinhoScreen from './carrinho';
import TicketScreen from './ticket';

//=============================================================

const Stack = createNativeStackNavigator();

export default function App() {
  return (

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
          name="Ticket" 
          component={TicketScreen} 
          />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
