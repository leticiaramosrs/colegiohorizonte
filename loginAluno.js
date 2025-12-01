import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import styles from './styles'; // importa os estilos de outro arquivo
import { useUserContext } from "./UserContext"

export default function LoginAlunoScreen({ navigation }) {
  const { loginAluno, usuarioAluno } = useUserContext();
  const [nomeAluno, setNomeAluno] = useState('')
  const [senhaAluno, setSenhaAluno] = useState('')

  function handleLogin(){
    loginAluno({ nomeAluno, senhaAluno, cargo: "estudante" });
    console.log("Nome:" + nomeAluno + "Senha:" + senhaAluno)
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
            navigation.navigate("Home")}}>
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
