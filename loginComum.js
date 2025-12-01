import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import styles from './styles'; // importa os estilos de outro arquivo
import { useUserContext } from "./UserContext"

export default function LoginComumScreen({ navigation }) {
  const { login, user } = useUserContext();
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')

  function handleLogin(){
    login({ name: nome, role: "estudante" });
    console.log(nome,senha)
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
            value={nome}
            onChangeText={setNome}
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
            value={senha}
            onChangeText={setSenha}
            style={styles.input1}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.botaozinho}
          onPress={() => {
            handleLogin()
            navigation.navigate("Home")}}>
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
