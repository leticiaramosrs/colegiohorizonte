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
import { TextInput } from 'react-native-gesture-handler';


// function atualizarSaldo() {
//   setSaldoAtual(180);
// }



export default function HomeScreen({ navigation }) {
  const { usuarioAluno, usuarioAdmin } = levaUserContext();
  const nome = usuarioAluno.nomeAluno || usuarioAdmin.nomeAdmin;

    const [saldoAtual, setSaldoAtual] = useState(0);
    const [saldoDigitado, setSaldoDigitado] = useState();

  return (
    <View style={styles.tudo}>
      <Text style={styles.textoPromocoes}> Bem-vindo!!! {"\n"} Seu saldo atual é de: {saldoAtual} reais </Text>
      <TextInput
      placeholder="Digite o valor que quer adicionar gratuitamente"
      value={saldoDigitado}
      onChangeText={setSaldoDigitado}
      style={styles.input1}
      />
    <TouchableOpacity  style={styles.botaodeAdicionar}
      onPress={() => {
        
        const valor = parseFloat(saldoDigitado); // para reais e centavos
        if (!isNaN(valor)) { // só permitirá se for um número
          setSaldoAtual(saldoAtual + valor); // soma o saldo atual com o valor digitado
          setSaldoDigitado(""); // Some com o valor digitado dps de adicionado
        }
      }}
    >
      <Text>Adicionar saldo</Text>
    </TouchableOpacity>
    </View>
    
  );
}













//       <View style={styles.caixahome2}></View>