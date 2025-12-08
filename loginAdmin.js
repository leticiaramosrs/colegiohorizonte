import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import styles from './styles'; 
import { levaUserContext } from "./UserContext"

export default function LoginAdminScreen({ navigation }) {
    const { loginAdmin, usuarioAdmin } = levaUserContext();
    const [nomeAdmin, setNomeAdmin] = useState('');
    const [senhaAdmin, setSenhaAdmin] = useState('');

    function handleLogin() {

      //=============================================================
      // VALIDAÇÃO DO ADMIN
      //=============================================================

      // o indexOf procura se o nome digitado existe no array de admins
      const nomeDigitadoAdmin = usuarioAdmin.nomeAdmin.indexOf(nomeAdmin);

      // se o nome não existir, indexOf retorna -1 que significa que o nome não está no array
      if (nomeDigitadoAdmin === -1) {
        alert("Usuário Admin não encontrado!");
          return; // interrompe o login
      }

      // se a senha estiver errada para o nome digitado
      if (usuarioAdmin.senhaAdmin[nomeDigitadoAdmin] !== senhaAdmin) {
        alert("Senha não encontrada!");
          return; // interrompe o login
      }

        // Imprime no console o nome e senha do admin logado para teste
        console.log("Nome:" + nomeAdmin + "Senha:" + senhaAdmin);
        navigation.navigate("Main"); // só permite a navegação se as informações do login estiverem corretas
      }

  return (
    <View style={styles.tudo2}>
    <View style={styles.tudomenor}>

    <View style={styles.atraslogin}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
    </View>

{/*
//=============================================================
// Titulo e View de inputs na Tela de Login Admin
//============================================================= 
*/}

    <Text style={styles.textodecima}>Entre como admin</Text>

    <View style={styles.inputs}>

{/*
//=============================================================
// Input de Nome na Tela de Login Admin
//============================================================= 
*/}

      <Text style={styles.texto}>Nome de usuário</Text>
      
      <TextInput
      placeholder="Digite o seu nome de usuário"
      value={nomeAdmin}
      onChangeText={setNomeAdmin}
      style={styles.input1}
      />
        
{/*
//=============================================================
// Input de Senha na Tela de Login Admin
//============================================================= 
*/}

        <Text style={styles.texto}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          value={senhaAdmin}
          onChangeText={setSenhaAdmin}
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
      onPress={() => navigation.navigate("LoginAluno")}>
    <Text style={styles.textodeadmin}>Entre como estudante</Text>
    </TouchableOpacity>

    </View>
    </View>

  );
}