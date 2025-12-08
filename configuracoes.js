import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useState } from 'react';
import styles from './styles'; // importa os estilos de outro arquivo
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { levaUserContext } from "./UserContext";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function ConfirguracoesScreen({ navigation }) {

  return (
    <View style={styles.tudo}>
        <TouchableOpacity 
        style={styles.botaoSair}
        onPress={() => 
            navigation.navigate("LoginAluno")}>Sair
        </TouchableOpacity>
    </View>
  );

}

    






