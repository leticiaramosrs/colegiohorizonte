import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import styles from './styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { levaUserContext } from "./UserContext";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const alimentos = ['Doce gatinho', 'brigadeiro', 'Kalzone de frango', 'Kalzone de carne', 'Pizza', 'Água', 'suco de uva', 'suco de maçã', 'suco de laranja']

export default function LojaScreen({ navigation }) {
  return (
  <>
    <SafeAreaView style={styles.tudo}>

      <Text style={styles.textoPromocoes}>Promoções e cárdapio do dia</Text>
  
  <FlatList style={styles.caixaDeAlimentos}

    data={alimentos}
    keyExtractor={(alimento) => alimento.toString()}
    renderItem={({ item }) => (

      <TouchableOpacity style={styles.botaoDeAlimentos}>
      <View style={styles.listaDeAlimentos}>
        <Text style={styles.textolistaDeAlimentos}>{item}</Text>
      </View>
        </TouchableOpacity>
    )}
    showsVerticalScrollIndicator={false} // serve para remover a barrinha ao lado da lista
  />
  
      
  
    </SafeAreaView>
    </>
    );
  }