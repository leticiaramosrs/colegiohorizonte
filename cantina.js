// import { createContext, useState } from "react";

// export const CantinaContext = createContext();

// export function CantinaProvider({ children }) {
//   const [produtos, setProdutos] = useState([
//     { id: 1, nome: "Coxinha", preco: 6 },
//     { id: 2, nome: "Suco", preco: 4 },
//     { id: 3, nome: "Pastel", preco: 7 },
//   ]);

//   const [carrinho, setCarrinho] = useState([]);

//   function adicionarAoCarrinho(produto) {
//     setCarrinho([...carrinho, produto]);
//   }

//   function removerDoCarrinho(id) {
//     setCarrinho(carrinho.filter(item => item.id !== id));
//   }

//   return (
//     <CantinaContext.Provider value={{
//       produtos,
//       carrinho,
//       adicionarAoCarrinho,
//       removerDoCarrinho
//     }}>
//       {children}
//     </CantinaContext.Provider>
//   );
// }
// import { CantinaProvider } from "./contexts/CantinaContext";
// import { AdminProvider } from "./contexts/AdminContext";
// import Main from "./Main";

// export default function App() {
//   return (
//     <CantinaProvider>
//       <AdminProvider>
//         <Main />
//       </AdminProvider>
//     </CantinaProvider>
//   );
// }




// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import Produtos from "./screens/Produtos";
// import Carrinho from "./screens/Carrinho";
// import LoginAdmin from "./screens/LoginAdmin";
// import AreaAdmin from "./screens/AreaAdmin";

// const Stack = createStackNavigator();

// export default function Main() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Produtos" component={Produtos} />
//         <Stack.Screen name="Carrinho" component={Carrinho} />
//         <Stack.Screen name="Login Admin" component={LoginAdmin} />
//         <Stack.Screen name="Area Admin" component={AreaAdmin} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




// import { useContext } from "react";
// import { View, Text, Button } from "react-native";
// import { CantinaContext } from "../contexts/CantinaContext";

// export default function Produtos() {
//   const { produtos, adicionarAoCarrinho } = useContext(CantinaContext);

//   return (
//     <View style={{ marginTop: 50 }}>
//       <Text style={{ fontSize: 22 }}>Produtos da Cantina:</Text>

//       {produtos.map((p) => (
//         <View key={p.id} style={{ marginVertical: 10 }}>
//           <Text>{p.nome} - R$ {p.preco}</Text>
//           <Button title="Adicionar ao carrinho" onPress={() => adicionarAoCarrinho(p)} />
//         </View>
//       ))}
//     </View>
//   );
// }




// import { useContext } from "react";
// import { View, Text, Button } from "react-native";
// import { CantinaContext } from "../contexts/CantinaContext";

// export default function Carrinho() {
//   const { carrinho, removerDoCarrinho } = useContext(CantinaContext);

//   return (
//     <View style={{ marginTop: 50 }}>
//       <Text style={{ fontSize: 22 }}>Carrinho:</Text>

//       {carrinho.map((item) => (
//         <View key={item.id} style={{ marginVertical: 10 }}>
//           <Text>{item.nome} - R$ {item.preco}</Text>
//           <Button title="Remover" onPress={() => removerDoCarrinho(item.id)} />
//         </View>
//       ))}
//     </View>
//   );
// }




// import { useState, useContext } from "react";
// import { View, Text, TextInput, Button } from "react-native";
// import { AdminContext } from "../contexts/AdminContext";

// export default function LoginAdmin({ navigation }) {
//   const { loginAdmin } = useContext(AdminContext);

//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");

//   function entrar() {
//     const ok = loginAdmin(email, senha);
//     if (ok) navigation.navigate("Area Admin");
//     else alert("Login incorreto!");
//   }

//   return (
//     <View style={{ marginTop: 50 }}>
//       <Text>Email:</Text>
//       <TextInput
//         style={{ borderWidth: 1 }}
//         value={email}
//         onChangeText={setEmail}
//       />

//       <Text>Senha:</Text>
//       <TextInput
//         style={{ borderWidth: 1 }}
//         secureTextEntry
//         value={senha}
//         onChangeText={setSenha}
//       />

//       <Button title="Entrar" onPress={entrar} />
//     </View>
//   );
// }




// import { useContext } from "react";
// import { View, Text, Button } from "react-native";
// import { AdminContext } from "../contexts/AdminContext";

// export default function AreaAdmin({ navigation }) {
//   const { admin, logoutAdmin } = useContext(AdminContext);

//   if (!admin) {
//     return <Text style={{ marginTop: 50 }}>Acesso negado!</Text>;
//   }

//   return (
//     <View style={{ marginTop: 50 }}>
//       <Text style={{ fontSize: 20 }}>
//         Bem-vindo, {admin.nome}!
//       </Text>

//       <Button title="Sair" onPress={() => {
//         logoutAdmin();
//         navigation.navigate("Login Admin");
//       }} />
//     </View>
//   );
// }
