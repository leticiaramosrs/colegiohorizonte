import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import styles from './styles'; // importa os estilos de outro arquivo
import { FontAwesome } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
          options={{title: 'Tela Inicial', headerShown: false}}
          />

        <Stack.Screen
          name="LoginDeAdm"
          component={LoginadmScreen}
          options={{title: 'Login Admin', headerShown: false}}
          />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home', headerShown: false}}
          />

        <Stack.Screen
          name="Compras"
          component={ComprasScreen}
          options={{ title: "Compras" }}
          />


      </Stack.Navigator>
    </NavigationContainer>

  );
}

function LoginComumScreen({ navigation }) {
  return (
    <View style={styles.tudo}>

    <View style={styles.tudomenor}>
    <View style={styles.atraslogin}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
    </View>
    <Text style={styles.textodecima}>Entre como estudante </Text>
    <View style={styles.inputs}>
      <Text style={styles.texto}>Matricula</Text>
      <TextInput style={styles.input1} placeholder="Digite sua matricula" />

      <Text style={styles.texto}>Senha</Text>
      <TextInput secureTextEntry style={styles.input1} placeholder="Digite sua senha" />
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
  );
}

function LoginadmScreen({ navigation }) {
  return (
    <View style={styles.tudo}>
    <View style={styles.tudomenor}>

    <View style={styles.atraslogin}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
    </View>

    <Text style={styles.textodecima}>Entre como admin</Text>

    <View style={styles.inputs}>

      <Text style={styles.texto}>Nome de usuário</Text>
      <TextInput style={styles.input1} placeholder="Digite o seu nome de usuário" />

        <Text style={styles.texto}>Senha</Text>
        <TextInput secureTextEntry style={styles.input1} placeholder="Digite sua senha" />
        

      </View>

      <TouchableOpacity style={styles.botaozinho}
        onPress={() => navigation.navigate("Home")}>
      <Text style={styles.textodobotaozinho}>Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.contaadmin}
      onPress={() => navigation.navigate("LoginComum")}>
    <Text style={styles.textodeadmin}>Entre como estudante</Text>
    </TouchableOpacity>

    </View>
    </View>

  );
}

function HomeScreen({ navigation }) {
  return (

  <View style={styles.tudo}>
     <Text style={styles.textoPromocoes}>Promoções {"\n"} cárdapio {"\n"} do dia</Text>
        
        <TouchableOpacity style={styles.bolaDePerfilBotao}
      onPress={() => navigation.navigate("LoginComum")}>
          <Ionicons name="person-circle" size={50} color="black" style={styles.bolaDePerfilSimbolo} />
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
  );
}

    // <View style={styles.tudo}>
    //   <View style={styles.logoContainer}>
    //     <Image style={styles.logo2} source={require('./assets/logoColegiocopia1.png')} ></Image>
    //   </View>
    //   <View style={styles.homenav}> </View>
    // </View>
    


//   );
// }
function ComprasScreen({ navigation }) {

}