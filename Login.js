import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import styles from './styles'; 
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Login() {
  // const stack = createNativeStackNavigator();
  return (

      <View style={styles.tudo}>
                <Image style={styles.logo} source={ require('./assets/logoColegiocopia1.png')}></Image>  
                      <Text style={styles.textodecima}>Entre na sua conta de estudante </Text>
        <View style={styles.inputs}>
          <Text style={styles.texto}>Nome completo</Text>
          <TextInput style={styles.input1} placeholder="Digite seu nome completo" />

          <Text style={styles.texto}>Matrícula</Text>
          <TextInput style={styles.input1} placeholder="Digite sua senha" />
        </View>

        <TouchableOpacity style={styles.botaozinho}>
          <Text style={styles.textodobotaozinho}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contaadmin} >
        <Text style={styles.textodeadmin}>Entre com sua conta de Admin</Text>
        </TouchableOpacity>
      </View>

  );
}