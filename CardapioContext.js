
// // Alimentos do cardapio e carrinho de compras
// import { createContext, useState } from "react";

// export const CardapioContext = createContext();

// export function CardapioProvider({ children }) {

//   const [alimentos, setAlimentos] = useState([
//     { id: 1, nome: 'Doce gatinho', preco: 3 },
//     { id: 2, nome: 'Brigadeiro', preco: 4 },
//     { id: 3, nome: 'Kalzone de frango', preco: 7 },
//     { id: 4, nome: 'Kalzone de carne', preco: 7 },
//     { id: 5, nome: 'Pizza', preco: 7 },
//     { id: 6, nome: 'Água', preco: 2 },
//     { id: 7, nome: 'Suco de uva', preco: 4 },
//     { id: 8, nome: 'Suco de maçã', preco: 4 },
//     { id: 9, nome: 'Suco de laranja', preco: 4 },
//     { id: 10, nome: 'Coxinha', preco: 3 },
//     { id: 11, nome: 'Suco', preco: 4 },
//     { id: 12, nome: 'Pastel', preco: 6 },
//   ]);

//   const [carrinho, setCarrinho] = useState([]);

//   function adicionarAoCarrinho(produto) {
//     setCarrinho([...carrinho, produto]);
//   }

//   function removerDoCarrinho(id) {
//     setCarrinho(carrinho.filter(item => item.id !== id));
//   }

//   return (
//     <CardapioContext.Provider value={{
//       alimentos,
//       carrinho,
//       adicionarAoCarrinho,
//       removerDoCarrinho
//     }}>
//       {children}
//     </CardapioContext.Provider>
//   );
// }
