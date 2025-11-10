import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import styles from './styles'; // importa os estilos de outro arquivo
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  // const stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="LoginComum" 
          component={LoginComumScreen} 
          options={{title: 'Tela Inicial'}}
          />

        <Stack.Screen
          name="LoginDeAdm"
          component={LoginadmScreen}
          options={{title: 'Login Admin'}}
          />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
          />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

function LoginComumScreen({ navigation }) {
  return (
    <View style={styles.tudo}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
    <Text style={styles.textodecima}>Entre na sua conta de estudante </Text>
    <View style={styles.inputs}>
      <Text style={styles.texto}>Nome completo</Text>
      <TextInput style={styles.input1} placeholder="Digite seu nome completo" />

      <Text style={styles.texto}>Matrícula</Text>
      <TextInput style={styles.input1} placeholder="Digite sua senha" />
    </View>

    <TouchableOpacity style={styles.botaozinho}
    onPress={() => navigation.navigate("Home")}>
      <Text style={styles.textodobotaozinho}>Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.contaadmin}
      onPress={() => navigation.navigate("LoginDeAdm")}>
    <Text style={styles.textodeadmin}>Entre na sua conta de Admin</Text>
    </TouchableOpacity>
  </View>
  );
}

function LoginadmScreen({ navigation }) {
  return (
    <View style={styles.tudo}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
    <Text style={styles.textodecima}>Entre na sua conta de estudante </Text>
    <View style={styles.inputs}>
      <Text style={styles.texto}>Nome de usuário</Text>
      <TextInput style={styles.input1} placeholder="Digite o seu usuário" />

      <Text style={styles.texto}>Senha</Text>
      <TextInput style={styles.input1} placeholder="Digite sua senha" />
    </View>

    <TouchableOpacity style={styles.botaozinho}
        onPress={() => navigation.navigate("Home")}>
      <Text style={styles.textodobotaozinho}>Entrar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.contaadmin}
      onPress={() => navigation.navigate("LoginComum")}>
    <Text style={styles.textodeadmin}>Entre na sua conta de Estudante</Text>
    </TouchableOpacity>
  </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.tudo}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
  </View>
  );
}
