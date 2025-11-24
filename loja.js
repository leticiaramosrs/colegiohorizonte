import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LojaScreen({ navigation }) {
  return (
    <View style={styles.tudo}>
      <TouchableOpacity>

      </TouchableOpacity>

    <View style={styles.barraNoCantoSuperior}>

    <TouchableOpacity style={styles.bolaDePerfilBotao}
    onPress={() => navigation.navigate("Perfil")}>
    <Ionicons name="person-circle" size={60} color="pink" style={styles.bolaDePerfilSimbolo} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.bag}
    onPress={() => navigation.navigate("Carrinho")}>
    <Ionicons name="bag" size={50} color="white" />
    </TouchableOpacity>

    </View>


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
    onPress={() => navigation.navigate("LoginComum")}>
    <Ionicons name="settings-outline" size={36} color="black" style={styles.icones1}/>
  </TouchableOpacity>

  </View>
  </View>


  );
}
