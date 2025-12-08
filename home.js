import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useState } from 'react';
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
// const [saldoAtual, setSaldoAtual] = useState(0);

// function atualizarSaldo() {
//   setSaldoAtual(180);
// }



export default function HomeScreen({ navigation }) {

  const { usuarioAluno, usuarioAdmin } = levaUserContext();
  const nome = usuarioAluno.nomeAluno || usuarioAdmin.nomeAdmin;
  // const { transporteTeste } = levaUserContext(); // Teste para ver como a passagem de informações funciona

  return (
<>
  <SafeAreaView style={styles.tudo}>

    {/* <View style={styles.barraNoCantoSuperior}>

        <TouchableOpacity style={styles.bolaDePerfilBotao}
      onPress={() => navigation.navigate("Configurações")}>
          <Ionicons name="person-circle" size={60} color="pink" style={styles.bolaDePerfilSimbolo} />
    </TouchableOpacity>

    <View style={styles.boasVindasFundo}>
    <Text style={styles.boasVindas}>Bem Vindo!!!</Text> */}
    {/* <Text>{transporteTeste}</Text> */}
    {/* </View> */}

    {/* </View> */}

    <Text style={styles.textoPromocoes}>Promoções e cárdapio do dia</Text>
    {/* <Text style={styles.textoPromocoes}>{saldoAtual}</Text> */}


<FlatList style={styles.caixaDeAlimentos}
  data={alimentos}
  keyExtractor={(alimento) => alimento.toString()}
  renderItem={({ item }) => (
          <TouchableOpacity style={styles.botaoDeAlimentos}>
    <View style={styles.listaDeAlimentos}>
      <Text>{item}</Text>
    </View>
          </TouchableOpacity>
  )}
  showsVerticalScrollIndicator={false} // serve para remover a barrinha ao lado da lista
/>

    

  </SafeAreaView>
  </>
  );
}













//       <View style={styles.caixahome2}></View>