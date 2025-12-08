import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useState } from 'react';
import styles from './styles'; // importa os estilos de outro arquivo
import { levaUserContext } from "./UserContext";
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  const { usuarioAluno, usuarioAdmin } = levaUserContext();
  const nome = usuarioAluno.nomeAluno || usuarioAdmin.nomeAdmin;

    // Const do saldo que será ou que está digitado
    const [saldoAtual, setSaldoAtual] = useState(0);
    const [saldoDigitado, setSaldoDigitado] = useState();

  return (
    <View style={styles.tudo}>  

    <View style={styles.tudomenorHome}>   
    <Text style={styles.textodeboasvindas}> Bem-vindo(a) a versão teste!!! {"\n"} Seu saldo atual é de: {saldoAtual} reais </Text>   
    <TextInput
      placeholder="Digite o valor para adicionar gratuitamente"
      value={saldoDigitado}
      onChangeText={setSaldoDigitado}
      style={styles.input1}
      />
    <TouchableOpacity  style={styles.botaodeAdicionar}
      onPress={() => {
        
        const valor = parseFloat(saldoDigitado); // para reais e centavos

        // !isNan só permitirá se for um número, e o valor adicionado só poderá ser entre 0 e 100
        if (!isNaN(valor) && valor >= 0 && valor <= 100) { 
          setSaldoAtual(saldoAtual + valor); // soma o saldo atual com o valor digitado
          setSaldoDigitado(""); // Some com o valor digitado dps de adicionado
        }
      }}
      >
      <Text style={styles.textoDoBotaoDeAdicionarSaldo}>Adicionar saldo</Text>
    </TouchableOpacity>
    </View>
    </View>
    
  );
}


