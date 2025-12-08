import { createContext, useContext, useState } from "react";

const UserContext = createContext(); // Const que irá guardar as informações de usuario
// const transporteTeste = "funcionou"; // Teste para ver como a passagem de informações funciona

// Como ela funciona? você irá dar valor a uma variavel e coloca-la denntro de uma "caixa" no provider, que irá guardar e
// transportar a informação para uma outra tela, que coiso maligno ' v '

export const UserProvider = ({ children }) => {

//=============================================================
// Informações de Login para Admins
//============================================================= 

  const [usuarioAdmin, setUsuarioAdmin] = useState({
    cargo: "Admin", // Cargo de Admin ( ' v')
    nomeAdmin: ["t", "Taylor", "Leticia,", "Katiely"], // nome de cada Admin, que coisa ruim de se fazer - . -
    senhaAdmin: ["1", "123", "abc", "admin123"], // Senha de cada Admin ' v '
  });

  const loginAdmin = () => {
    setUsuarioAdmin({
      cargo: "Admin",
      nomeAdmin: ["t", "Taylor", "Leticia,", "Katiely"],
      senhaAdmin: ["1", "123", "abc", "admin123"],
    });
  };
  
//=============================================================
// Informações de Login para Alunos
//============================================================= 

  const [usuarioAluno, setUsuarioAluno] = useState({
    cargo: "Aluno",
      nomeAluno: ["t", "Cesar", "Diego", "Gustavo", "Luiz", "Pascal", "Davi"],
      senhaAluno: ["t", "parangaricutirimicuaro", "wh", "hornet", "27112024", "Pascal", "zzz"],
  });

  const loginAluno = () => {
    setUsuarioAluno({
      cargo: "Aluno",
      nomeAluno: ["t", "Cesar", "Diego", "Gustavo", "Luiz", "Pascal", "Davi"],
      senhaAluno: ["t", "parangaricutirimicuaro", "wh", "hornet", "27112024", "Pascal", "zzz"],
    });
  };

  return (
    // Isso está dando informações para o UserContext e o .Provider vai ser o responsavel por guardar as informações
    <UserContext.Provider 
      value={{
      usuarioAluno,  // Faz guardar os dados de usuarioAluno
      usuarioAdmin, // Faz guardar os dados de usuarioAdmin
      loginAluno,  // Faz guardar os dados de loginAluno
      loginAdmin, // Faz guardar os dados de loginAdmin 
      // transporteTeste   // não faz nada por ter sumido ' v' por estar comentado
      }}>

{/* É essencial para o funcionamento do provider, ele representa qualquer componente escrito dentro do Provider. */}
       {children} 
    </UserContext.Provider>
  );
};

// 
export const levaUserContext = () => useContext(UserContext);

// ==========================

// Alimentos do cardapio e carrinho de compras
export const CardapioContext = createContext();

export function CardapioProvider({ children }) {

  const [alimentos, setAlimentos] = useState([
    { id: 1, nome: 'Doce gatinho', preco: 3 },
    { id: 2, nome: 'Brigadeiro', preco: 4 },
    { id: 3, nome: 'Kalzone de frango', preco: 7 },
    { id: 4, nome: 'Kalzone de carne', preco: 7 },
    { id: 5, nome: 'Pizza', preco: 7 },
    { id: 6, nome: 'Água', preco: 2 },
    { id: 7, nome: 'Suco de uva', preco: 4 },
    { id: 8, nome: 'Suco de maçã', preco: 4 },
    { id: 9, nome: 'Suco de laranja', preco: 4 },
    { id: 10, nome: 'Coxinha', preco: 3 },
    { id: 11, nome: 'Suco', preco: 4 },
    { id: 12, nome: 'Pastel', preco: 6 },
  ]);

  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  function removerDoCarrinho(id) {
    setCarrinho(carrinho.filter(item => item.id !== id));
  }

  return (
    <CardapioContext.Provider value={{
      alimentos,
      carrinho,
      adicionarAoCarrinho,
      removerDoCarrinho
    }}>
      {children}
    </CardapioContext.Provider>
  );
}
