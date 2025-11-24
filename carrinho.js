import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';

export default function CarrinhoScreen({navigation}) {
  const [variavel, insertarValor] = useState(1);
  useEffect(() =>{
    insertarValor(140)
  }, [])
  return (
    <View style={styles.tudo}>
<View style={styles.barraNoCantoSuperior}>

<View>
      <TouchableOpacity style={styles.seta}
          onPress={() => navigation.navigate("Loja")}>
    <FontAwesome name="arrow-left" size={35} color="rgb(244, 11, 93)" />
    </TouchableOpacity>
      </View>
      <Text style={ styles.Textocarrinho1}>Carrinho</Text>
    </View> 
     
    <Text> Total de Itens no carrinho: {variavel} </Text>
    </View>

     
  );
}
