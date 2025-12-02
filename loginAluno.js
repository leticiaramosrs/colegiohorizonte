import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { useUserContext } from "./UserContext"

export const transporte = "funcionou";

export default function LoginAlunoScreen({ navigation }) {
  const { loginAluno, usuarioAluno } = useUserContext();
  const [nomeAluno, setNomeAluno] = useState('');
  const [senhaAluno, setSenhaAluno] = useState('');
  const [valido, setValido] = useState(true);

  function handleLogin(){

//=============================================================
// VALIDAÇÃO DO ALUNO
//=============================================================

      // verifica se o nome existe no array de admins
      const index = usuarioAluno.nomeAluno.indexOf(nomeAluno);

      if (index === -1) { // é um if que impedirá que o "Aluno" entre se o nome dele estiver incorreta
        alert("Aluno não encontrado!"); // Imprime "Aluno não encontrado!"
        return; // impede login
      }

      // verifica se a senha correta corresponde ao usuário correto
      if (usuarioAluno.senhaAluno[index] !== senhaAluno) { // é um if que impedirá que o "Aluno" entre se a senha estiver incorreta
        alert("Senha incorreta!"); // Imprime "Senha incorreta"
        return; // impede login
      }

        // Verificará para login e imprimirá no console o nome e senha cadastrado
        loginAluno({ nomeAluno, senhaAluno, cargo: "Aluno" });
        console.log("Nome:" + nomeAluno + "Senha:" + senhaAluno);
      
        navigation.replace("Tabs");
      }

      return (
    <View style={styles.tudo}>

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
        <TouchableOpacity style={styles.botaozinho}
          onPress={() => {
            handleLogin()
            navigation.navigate("Tabs")}}>
          <Text style={styles.textodobotaozinho}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contaadmin}
          onPress={() => navigation.navigate("LoginAdmin")}>
          <Text style={styles.textodeadmin}>Entre como Admin</Text>
        </TouchableOpacity>


      </View>


    </View>
      )}
