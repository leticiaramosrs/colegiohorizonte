import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { levaUserContext } from "./UserContext"

export default function LoginAlunoScreen({ navigation }) {
    const { loginAluno, usuarioAluno } = levaUserContext();
    const [nomeAluno, setNomeAluno] = useState('');
    const [senhaAluno, setSenhaAluno] = useState('');

    function handleLogin(){

      //=============================================================
      // VALIDAÇÃO DO ALUNO
      //=============================================================

      // o indexOf procura se o nome digitado existe no array de admins
      const nomeDigitadoAluno = usuarioAluno.nomeAluno.indexOf(nomeAluno);

      // se o nome não existir, indexOf retorna -1 que significa que o nome não está no array
      if (nomeDigitadoAluno === -1) { 
        alert("Aluno não encontrado!");
          return; // interrompe o login
      }

      // se a senha estiver errada para o nome digitado
      if (usuarioAluno.senhaAluno[nomeDigitadoAluno] !== senhaAluno) {
        alert("Senha não encontrada!");
          return; // interrompe o login
      }

        // Imprime no console o nome e senha do Aluno logado para testes
        console.log("Nome:" + nomeAluno + "Senha:" + senhaAluno);
        navigation.navigate("Main"); // só permite a navegação se as informações do login estiverem corretas
      }

  return (
    <View style={styles.tudo2}>
    <View style={styles.tudomenor}>

    <View style={styles.atraslogin}>
    <Image style={styles.logo} source={require('./assets/logoColegiocopia1.png')}></Image>
    </View>

{/*
//=============================================================
// Titulo e View de inputs na Tela de Login estudante
//============================================================= 
*/}

    <Text style={styles.textodecima}>Entre como estudante </Text>

    <View style={styles.inputs}>

{/*
//=============================================================
// Input de Matricula na Tela de Login estudante
//============================================================= 
*/}

      <Text style={styles.texto}>Matricula</Text>
      
      <TextInput
      placeholder="Digite sua matricula"
      value={nomeAluno}
      onChangeText={setNomeAluno}
      style={styles.input1}
      />

{/*
//=============================================================
// Input de Senha na Tela de Login estudante
//============================================================= 
*/}

        <Text style={styles.texto}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          value={senhaAluno}
          onChangeText={setSenhaAluno}
          style={styles.input1}
          secureTextEntry
        />

      </View>

{/*
//=============================================================
// Botões na Tela de Login Admin
//============================================================= 
*/}

      <TouchableOpacity 
        style={styles.botaozinho}
        onPress={() => {
          handleLogin();
        }}>
        <Text style={styles.textodobotaozinho}>Entrar</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.contaadmin}
      onPress={() => navigation.navigate("LoginAdmin")}>
    <Text style={styles.textodeadmin}>Entre como Admin</Text>
    </TouchableOpacity>

    </View>
    </View>

  );
}
