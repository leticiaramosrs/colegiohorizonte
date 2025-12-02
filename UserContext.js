import { createContext, useContext, useState } from "react";

const UserContext = createContext();

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
    nomeAluno: ["Cesar", "Diego", "Gustavo", "Luiz", "Pascal", "Davi"],
    senhaAluno: ["parangaricutirimicuaro", "wh", "hornet", "27112024", "Pascal", "zzz"],
  });

  const loginAluno = () => {
    setUsuarioAluno({
      cargo: "Aluno",
      nomeAluno: ["Cesar", "Diego", "Gustavo", "Luiz", "Pascal", "Davi"],
      senhaAluno: ["parangaricutirimicuaro", "wh", "hornet", "27112024", "Pascal", "zzz"],
    });
  };

  return (
    <UserContext.Provider 
      value={{ usuarioAluno, usuarioAdmin, loginAluno, loginAdmin }}>

      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
