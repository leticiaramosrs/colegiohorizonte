import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import styles from './styles'; // importa os estilos de outro arquivo
import { FontAwesome } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
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
<<<<<<< HEAD
        <Stack.Screen 
          name="LoginComum" 
          component={LoginComumScreen} 
          options={{title: 'Tela Inicial', headerShown: false}}
          />
=======
        <Stack.Screen
          name="LoginComum"
          component={LoginComumScreen}
          options={{ title: 'Tela Inicial' }}
        />
>>>>>>> 89734bd396d4561bc1fe989b8c5c1f04a42ead80

        <Stack.Screen
          name="LoginDeAdm"
          component={LoginadmScreen}
<<<<<<< HEAD
          options={{title: 'Login Admin', headerShown: false}}
          />
=======
          options={{ title: 'Login Admin' }}
        />
>>>>>>> 89734bd396d4561bc1fe989b8c5c1f04a42ead80

        <Stack.Screen
          name="Home"
          component={HomeScreen}
<<<<<<< HEAD
          options={{title: 'Home', headerShown: false}}
          />
=======
          options={{ title: 'Home' }}
        />
>>>>>>> 89734bd396d4561bc1fe989b8c5c1f04a42ead80
      </Stack.Navigator>
    </NavigationContainer>

  );
}

function LoginComumScreen({ navigation }) {
  return (
    <View style={styles.tudo}>
<<<<<<< HEAD
    <View style={styles.tudomenor}>
    <View style={styles.atraslogin}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
    </View>
    <Text style={styles.textodecima}>Entre como estudante </Text>
    <View style={styles.inputs}>
      <Text style={styles.texto}>Matricula</Text>
      <TextInput style={styles.input1} placeholder="Digite sua matricula" />

      <Text style={styles.texto}>Senha</Text>
      <TextInput style={styles.input1} placeholder="Digite sua senha" />
    </View>

    <TouchableOpacity style={styles.botaozinho}
    onPress={() => navigation.navigate("Home")}>
      <Text style={styles.textodobotaozinho}>Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.contaadmin}
      onPress={() => navigation.navigate("LoginDeAdm")}>
    <Text style={styles.textodeadmin}>Entre como Admin</Text>
    </TouchableOpacity>
    </View>
  </View>
=======
      <Image style={styles.logo} source={require('./assets/logoColegiocopia1.png')}></Image>
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
>>>>>>> 89734bd396d4561bc1fe989b8c5c1f04a42ead80
  );
}

function LoginadmScreen({ navigation }) {
  return (
    <View style={styles.tudo}>
<<<<<<< HEAD
    <View style={styles.tudomenor}>
    <View style={styles.atraslogin}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
    </View>
    <Text style={styles.textodecima}>Entre como admin</Text>
    <View style={styles.inputs}>
      <Text style={styles.texto}>Nome de usuário</Text>
      <TextInput style={styles.input1} placeholder="Digite o seu nome de usuário" />
=======
      <Image style={styles.logo} source={require('./assets/logoColegiocopia1.png')}></Image>
      <Text style={styles.textodecima}>Entre na sua conta de estudante </Text>
      <View style={styles.inputs}>
        <Text style={styles.texto}>Nome de usuário</Text>
        <TextInput style={styles.input1} placeholder="Digite o seu usuário" />
>>>>>>> 89734bd396d4561bc1fe989b8c5c1f04a42ead80

        <Text style={styles.texto}>Senha</Text>
        <TextInput style={styles.input1} placeholder="Digite sua senha" />
      </View>

      <TouchableOpacity style={styles.botaozinho}
        onPress={() => navigation.navigate("Home")}>
<<<<<<< HEAD
      <Text style={styles.textodobotaozinho}>Entrar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.contaadmin}
      onPress={() => navigation.navigate("LoginComum")}>
    <Text style={styles.textodeadmin}>Entre como estudante</Text>
    </TouchableOpacity>
    </View>
  </View>
=======
        <Text style={styles.textodobotaozinho}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contaadmin}
        onPress={() => navigation.navigate("LoginComum")}>
        <Text style={styles.textodeadmin}>Entre na sua conta de Estudante</Text>
      </TouchableOpacity>
    </View>
>>>>>>> 89734bd396d4561bc1fe989b8c5c1f04a42ead80
  );
}

function HomeScreen({ navigation }) {
  return (
<<<<<<< HEAD
  <View style={styles.tudo}>
     <Text style={styles.textoPromocoes}>Promoções <br/> cárdapio <br/> do dia</Text>
        
        <TouchableOpacity style={styles.bolaDePerfil}
      onPress={() => navigation.navigate("LoginComum")}>
          <Ionicons name="person-circle" size={50} color="black" style={styles.bolaDePerfil} />
    </TouchableOpacity>

  <View style={styles.barraNoCantoInferior}>

  <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("LoginComum")}>
         <FontAwesome6 name="house" size={34} color="black" style={styles.icones1}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("compras")}>
      <Foundation name="shopping-cart" size={40} color="black" style={styles.icones1}/>    
    </TouchableOpacity>

    <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("LoginComum")}>
      <Entypo name="ticket" size={36} color="black" style={styles.icones1}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("LoginComum")}>
      <Ionicons name="settings-outline" size={36} color="black" style={styles.icones1}/>
    </TouchableOpacity>

    
  </View>
  </View>
=======
    <View style={styles.tudo}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo2} source={require('./assets/logoColegiocopia1.png')} ></Image>
      </View>
      <View style={styles.homenav}> </View>
    </View>

>>>>>>> 89734bd396d4561bc1fe989b8c5c1f04a42ead80
  );
}
function ComprasScreen({ navigation }) {

}