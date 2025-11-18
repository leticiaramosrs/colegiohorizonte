import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import styles from './styles'; // importa os estilos de outro arquivo

export default function LoginadmScreen({ navigation }) {
  return (
    <View style={styles.tudo}>
    <View style={styles.tudomenor}>

    <View style={styles.atraslogin}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
    </View>

    <Text style={styles.textodecima}>Entre como admin</Text>

    <View style={styles.inputs}>

      <Text style={styles.texto}>Nome de usuário</Text>
      <TextInput style={styles.input1} placeholder="Digite o seu nome de usuário" />

        <Text style={styles.texto}>Senha</Text>
        <TextInput secureTextEntry style={styles.input1} placeholder="Digite sua senha" />
        
      </View>

      <TouchableOpacity style={styles.botaozinho}
        onPress={() => navigation.navigate("Home")}>
      <Text style={styles.textodobotaozinho}>Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.contaadmin}
      onPress={() => navigation.navigate("LoginComum")}>
    <Text style={styles.textodeadmin}>Entre como estudante</Text>
    </TouchableOpacity>

    </View>
    </View>

  );
}
