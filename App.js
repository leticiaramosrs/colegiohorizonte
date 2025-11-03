
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tudinho}>
      <Text style={styles.tituloLogin}>Login</Text>
      <hr style={styles.hrs}></hr>
      
      <View>

      <View style={styles.inputs}>

      <Text style={styles.texto}>Matricula</Text>
      <TextInput style={styles.input1} placeholder='Digite sua Matricula'></TextInput>

      <Text style={styles.texto}>Senha</Text>
      <TextInput style={styles.input1 } placeholder='Digite sua senha'></TextInput>
      </View>

      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "gray",
    alignItems: 'center',
    // justifyContent: 'center',
    // height: 500
  },

  tudinho: {
    // backgroundColor: "gray",
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderRadius: 30,
    height: 75,
    padding: 10, 
    marginTop: 250,
  },

  tituloLogin: {
    fontSize: 55,
  },

  hrs: {
    width: 50,
  },

  input1: {
    // borderColor: "cyan",
    // color: "cyan",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10, 
    width: 350,
    margin: 5,
  },

  inputs: {
    padding: 10,
  },

});