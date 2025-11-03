import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import styles from './styles'; 

export default function App() {
  return (

      <View style={styles.tudo}>
        <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>
        <Text style={styles.textodecima}>Entre na sua conta de estudante </Text>
        <View style={styles.inputs}>
          <Text style={styles.texto}>Nome completo</Text>
          <TextInput style={styles.input1} placeholder="Digite seu nome completo" />

          <Text style={styles.texto}>Matrícula</Text>
          <TextInput style={styles.input1} placeholder="Digite sua matrícula" />
        </View>

        <TouchableOpacity style={styles.botaozinho}>
          <Text style={styles.textodobotaozinho}>Entrar</Text>
        </TouchableOpacity>

      </View>

  );
}