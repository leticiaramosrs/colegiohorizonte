import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import styles from './styles'; // importa os estilos de outro arquivo

export default function LoginComumScreen({ navigation }) {
  return (
    <View style={styles.tudo}>

    <View style={styles.tudomenor}>
    <View style={styles.atraslogin}>
    <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
    </View>
    <Text style={styles.textodecima}>Entre como estudante </Text>
    <View style={styles.inputs}>
      <Text style={styles.texto}>Matricula</Text>
      <TextInput style={styles.input1} placeholder="Digite sua matricula" />

      <Text style={styles.texto}>Senha</Text>
      <TextInput secureTextEntry style={styles.input1} placeholder="Digite sua senha" />
    </View>

    <TouchableOpacity style={styles.botaozinho}
    onPress={() => navigation.navigate("Home")}>
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