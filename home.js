import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import styles from './styles'; // importa os estilos de outro arquivo
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { levaUserContext } from "./UserContext";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';


// const comidas = ['Doce gatinho', 'Kalzones']
// const sucos = ['Água', 'Sucos']
const alimentos = ['Doce gatinho', 'brigadeiro', 'Kalzone de frango', 'Kalzone de carne', 'Pizza', 'Água', 'suco de uva', 'suco de maçã', 'suco de laranja']

export default function HomeScreen({ navigation }) {

  const { usuarioAluno, usuarioAdmin } = levaUserContext();
  const nome = usuarioAluno.nomeAluno || usuarioAdmin.nomeAdmin;
  // const { transporteTeste } = levaUserContext(); // Teste para ver como a passagem de informações funciona

  return (
<>
  <SafeAreaView style={styles.tudo}>

    <View style={styles.barraNoCantoSuperior}>

        <TouchableOpacity style={styles.bolaDePerfilBotao}
      onPress={() => navigation.navigate("Configurações")}>
          <Ionicons name="person-circle" size={60} color="pink" style={styles.bolaDePerfilSimbolo} />
    </TouchableOpacity>

    <View style={styles.boasVindasFundo}>
    <Text style={styles.boasVindas}>Bem Vindo!!!</Text>
    {/* <Text>{transporteTeste}</Text> */}
    </View>

    </View>

    <Text style={styles.textoPromocoes}>Promoções e cárdapio do dia</Text>

    <FlatList
      data={alimentos}
      keyExtractor={(item, alimento) => alimento.toString()}
      renderItem={({ item }) => ( 
      <View style={styles.listaDeAlimentos}>
        <Text>{item}</Text>
      </View>
      )}
    />

  {/*<View style={styles.barraNoCantoInferior}>

  <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("Home")}>
         <FontAwesome6 name="house" size={34} color="black" style={styles.icones1}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("Loja")}>
      <Foundation name="shopping-cart" size={40} color="black" style={styles.icones1}/>    
    </TouchableOpacity>

    <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("Ticket")}>
      <Entypo name="ticket" size={36} color="black" style={styles.icones1}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("Perfil")}>
      <Ionicons name="settings-outline" size={36} color="black" style={styles.icones1}/>
    </TouchableOpacity>
    
  </View> */}
  </SafeAreaView>
  </>
  );
}













//       <View style={styles.caixahome2}></View>