import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'; // importa os estilos de outro arquivo
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUserContext } from "./UserContext";

export default function HomeScreen({ navigation }) {

  const { user } = useUserContext();

  return (

  <View style={styles.tudo}>

    <View style={styles.barraNoCantoSuperior}>

        <TouchableOpacity style={styles.bolaDePerfilBotao}
      onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-circle" size={60} color="pink" style={styles.bolaDePerfilSimbolo} />
    </TouchableOpacity>

        {/* <TouchableOpacity style={styles.bolaDePerfilBotao}
      onPress={() => navigation.navigate("Usuarios")}>
          <Ionicons name="person-circle" size={60} color="pink" style={styles.bolaDePerfilSimbolo} />
    </TouchableOpacity> */}
    </View>

  
    <Text style={styles.textoPromocoes}>Bem vindo {user.name}, Promoções cárdapio {"\n"} do dia</Text>
    <View style={styles.caixahome}> <Text> </Text><View style={styles.caixahome2}></View></View>
    <View style={styles.caixahome}> <Text> </Text><View style={styles.caixahome2}></View></View>
    <View style={styles.caixahome}> <Text> </Text><View style={styles.caixahome2}></View></View>
    <View style={styles.caixahome}> <Text> </Text><View style={styles.caixahome2}></View></View>
    <View style={styles.caixahome}> <Text> </Text><View style={styles.caixahome2}></View></View>

  <View style={styles.barraNoCantoInferior}>

  <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("Home")}>
         <FontAwesome6 name="house" size={34} color="black" style={styles.icones1}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("Loja")}>
      <Foundation name="shopping-cart" size={40} color="black" style={styles.icones1}/>    
    </TouchableOpacity>

    <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("Ticket")}>
      <Entypo name="ticket" size={36} color="black" style={styles.icones1}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.icones1}
      onPress={() => navigation.navigate("Perfil")}>
      <Ionicons name="settings-outline" size={36} color="black" style={styles.icones1}/>
    </TouchableOpacity>
    
  </View>
  </View>
  );
}
