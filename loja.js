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

    <TouchableOpacity style={styles.bag}
    onPress={() => navigation.navigate("Carrinho")}>
    <Ionicons name="bag" size={50} color="white" />
    </TouchableOpacity>

    </View>



  );
}
