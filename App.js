import { Text, TouchableOpacity, View, ImageBackground, TextInput } from 'react-native';
import fundoBranco from './assets/fundoBranco.png'
import styles from './styles'; // importa os estilos de outro arquivo

export default function App() {
  return (
    <ImageBackground
    source={fundoBranco}
    style={styles.background}
    resizeMode='cover'>

      <View style={styles.container}>
        <Text style={styles.tituloLogin}>Login</Text>
        <hr style={styles.hrs}></hr>

        <View style={styles.inputs}>
          <Text style={styles.texto}>Nome ou CPF</Text>
          <TextInput style={styles.input1} placeholder="Digite seu nome completo" />

          <Text style={styles.texto}>Senha</Text>
          <TextInput style={styles.input1} placeholder="Digite sua senha" />
        </View>

        <TouchableOpacity style={styles.botaozinho}>
          <Text style={styles.textodobotaozinho}>Botão Teste</Text>
        </TouchableOpacity>

      </View>

    </ImageBackground>
  );
}
