import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuarioAluno, setUsuarioAluno] = useState({
    cargo: "",
    nomeAluno: "",
    senhaAluno: "",
  });

  const [usuarioAdmin, setUsuarioAdmin] = useState({
    cargo: "",
    nomeAdmin: "",
    senhaAdmin: "",
  });

  const loginAluno = (userData) => {
    setUsuarioAluno({
      cargo: "estudante",
      nomeAluno: userData.nomeAluno,
      senhaAluno: userData.senhaAluno,
    });

    // garante que admin não fica "logado"
    setUsuarioAdmin({
      cargo: "",
      nomeAdmin: "",
      senhaAdmin: "",
    });
  };

  const loginAdmin = (userData) => {
    setUsuarioAdmin({
      cargo: "admin",
      nomeAdmin: userData.nomeAdmin,
      senhaAdmin: userData.senhaAdmin,
    });

    // garante que aluno não fica "logado"
    setUsuarioAluno({
      cargo: "",
      nomeAluno: "",
      senhaAluno: "",
    });
  };

  return (
    <UserContext.Provider 
      value={{ 
        usuarioAluno, 
        usuarioAdmin, 
        loginAluno, 
        loginAdmin 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
