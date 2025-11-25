import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TicketScreen({ navigation }) {

  // ------------------ SISTEMA DE TICKET DIÁRIO ------------------

  function TicketDiario() {
    const SEGUNDOS_24H = 24 * 60 * 60;
    const [restante, setRestante] = useState(0);
    const [podeReceber, setPodeReceber] = useState(false);

    // Carrega o último ticket
    useEffect(() => {
      async function carregar() {
        const ultimo = await AsyncStorage.getItem('ultimo_ticket');

        if (!ultimo) {
          setPodeReceber(true);
          return;
        }

        const ultimoTimestamp = Number(ultimo);
        const agora = Date.now();
        const segundosPassados = Math.floor((agora - ultimoTimestamp) / 1000);

        if (segundosPassados >= SEGUNDOS_24H) {
          setPodeReceber(true);
          setRestante(0);
        } else {
          setPodeReceber(false);
          setRestante(SEGUNDOS_24H - segundosPassados);
        }
      }
      carregar();
    }, []);

    // Contagem regressiva
    useEffect(() => {
      if (podeReceber) return;

      const interval = setInterval(() => {
        setRestante((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setPodeReceber(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [podeReceber]);

    // Função para receber ticket
    const receber = async () => {
      setPodeReceber(false);
      setRestante(SEGUNDOS_24H);
      await AsyncStorage.setItem('ultimo_ticket', String(Date.now()));
    };

    // Formatador de tempo
    const formatar = (s) => {
      const h = String(Math.floor(s / 3600)).padStart(2, "0");
      const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      const sec = String(s % 60).padStart(2, "0");
      return `${h}:${m}:${sec}`;
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
        {podeReceber ? (
          <TouchableOpacity
            onPress={receber}
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'pink',
              padding: 20,
              bottom: 100,
              borderRadius: 16,
              marginBottom: 20
            }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
              🎉 Receber Ticket
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>
            {formatar(restante)}
          </Text>
        )}
      </View>
    );
  }

  // ------------------ TELA ORIGINAL COM SUAS BARRAS ------------------

  return (
    <View style={styles.tudo}>

      {/* ✔ Aqui aparece o contador ou botão de ticket */}
      <TicketDiario />

      <TouchableOpacity></TouchableOpacity>

      <View style={styles.barraNoCantoSuperior}>
        <TouchableOpacity
          style={styles.bolaDePerfilBotao}
          onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-circle" size={60} color="pink" style={styles.bolaDePerfilSimbolo} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bolaDePerfilBotao}
          onPress={() => navigation.navigate("Usuarios")}>
          <Ionicons name="person-circle" size={60} color="pink" style={styles.bolaDePerfilSimbolo} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bag}
          onPress={() => navigation.navigate("Carrinho")}>
        </TouchableOpacity>
      </View>

      <View style={styles.barraNoCantoInferior}>
        <TouchableOpacity style={styles.icones1} onPress={() => navigation.navigate("Home")}>
          <FontAwesome6 name="house" size={34} color="black" style={styles.icones1}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icones1} onPress={() => navigation.navigate("Loja")}>
          <Foundation name="shopping-cart" size={40} color="black" style={styles.icones1}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icones1} onPress={() => navigation.navigate("Ticket")}>
          <Entypo name="ticket" size={36} color="black" style={styles.icones1}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icones1} onPress={() => navigation.navigate("LoginComum")}>
          <Ionicons name="settings-outline" size={36} color="black" style={styles.icones1}/>
        </TouchableOpacity>
      </View>

    </View>
  );
}
