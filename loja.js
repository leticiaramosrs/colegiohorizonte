
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { CardapioContext } from './UserContext';

export default function LojaScreen() {

  const { alimentos, adicionarAoCarrinho } = useContext(CardapioContext);

  return (
    <SafeAreaView style={styles.tudo}>

      <Text style={styles.textoPromocoes}>
        Promoções e cardápio do dia
      </Text>

      <FlatList
        style={styles.caixaDeAlimentos}
        data={alimentos}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.botaoDeAlimentos}
            onPress={() => adicionarAoCarrinho(item)}
          >
            <View style={styles.listaDeAlimentos}>
              <Text style={styles.textolistaDeAlimentos}>
                {item.nome} - R$ {item.preco}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
