import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import styles from './styles'; 
import { useUserContext } from "./UserContext"

export default function LoginAdminScreen({ navigation }) {
    const { loginAdmin, usuarioAdmin } = useUserContext();
    const [nomeAdmin, setNomeAdmin] = useState('');
    const [senhaAdmin, setSenhaAdmin] = useState('');
    const [valido, setValido] = useState(true);

    function handleLogin(){

      //=============================================================
      // VALIDAÇÃO DO ADMIN
      //=============================================================

      // verifica se o nome existe no array de admins
      const index = usuarioAdmin.nomeAdmin.indexOf(nomeAdmin);

      if (index === -1) {
        alert("Usuário Admin não encontrado!");
        return; // impede login
      }

      // verifica se a senha correta corresponde ao usuário correto
      if (usuarioAdmin.senhaAdmin[index] !== senhaAdmin) {
        alert("Senha incorreta!");
        return; // impede login
      }

      // login permitido
      loginAdmin({ nomeAdmin, senhaAdmin, cargo: "admin" });
      console.log("Nome:" + nomeAdmin + "Senha:" + senhaAdmin);

      navigation.replace("Tabs");
    }

  return (
    <View style={styles.tudo}>
    <View style={styles.tudomenor}>

    <View style={styles.atraslogin}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
    </View>

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
        onPress={() => { handleLogin(); 
        navigation.navigate("Main"); }}>
        <Text style={styles.textodobotaozinho}>Entrar</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.contaadmin}
      onPress={() => { navigation.navigate("LoginAluno"); }}>
    <Text style={styles.textodeadmin}>Entre como estudante</Text>
    </TouchableOpacity>

    </View>
    </View>

  );
}
