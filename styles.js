import { StyleSheet } from 'react-native';

// Cores utilizadas:
// rgb(244, 11, 93)
// rgb(204, 11, 79)
// rgb(255, 242, 249)
// rgb(253, 206, 222)

export default StyleSheet.create({

//=============================================================
// Containers principais
//=============================================================

  tudo: {
    backgroundColor: "rgb(255, 255, 255)",
    // backgroundColor: "rgb(240, 240, 240)",
    flex: 1,
    alignItems: 'center',
  },

  tudomenor: {
    flex: 1,
    // backgroundColor: "rgb(253, 206, 222)",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
  },

//============================================================= 
// Botões
//============================================================= 

  botaozinho: {
    alignItems: "center",
    backgroundColor: "rgb(244, 11, 93)",
    borderRadius: 30,
    padding: 10,
    width: 330,
    margin: 5,
  },

  textodobotaozinho: {
    textAlign: "center",
    color: "white",
    fontSize: 19,
    fontFamily: "bold",
  },

  //============================================================= 
  // Inputs
  //============================================================= 

  input1: {
    // fontStyle: 'italic',
    backgroundColor: "rgb(255, 242, 249)",
    borderColor: "rgb(244, 11, 93)",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    width: 330,
    margin: 5,
    color: "rgb(244, 11, 93)",
    fontSize: 16,
    fontFamily: "bold",
  },

  inputs: {
    padding: 10,
    borderColor: "rgb(0, 0, 0)",
  },

  //============================================================= 
  // Textos
  //============================================================= 

  texto: {
    fontSize: 18,
    color: "rgb(0, 0, 0)",
    fontFamily: "bold",
    // textAlign: "center",
    // fontStyle: 'italic',
  },

  textodecima: {
    // textAlign: "center",
    // fontStyle: 'italic',
    color: "rgb(244, 11, 93)",
    fontSize: 23,
    fontFamily: "bold",
  },

  boasVindas: {
    fontSize: 27,
    position: "absolute",
    // fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    color:"rgb(244, 11, 93)",
    width: 250,
    height: 50,
  },

  textodeadmin: {
    // fontStyle: 'italic',
    alignItems: 'center',
    height: 50,
    fontSize: 18,
    padding: 10,
    marginTop: 10,
    textDecorationLine: "underline",
    color: "rgb(48, 155, 255)",
    borderRadius: 100,
    fontFamily: "bold",
    padding: 20,
    color: '#0080FF',
    textDecorationLine: 'underline',
  },

  textoPromocoes: {
    fontSize: 27,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    color:"rgb(244, 11, 93)",
    top: 100,
  },

  textocarrinho: {
     fontSize: 25,
     color: 'white',
     padding: 20,
     width:  '100%',
     textAlign: 'center',
     fontStyle: 'italic',
     fontWeight: 'bold',
  },
  Textocarrinho1: {
    fontSize: 25,
    color: 'white',
    padding: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',

  },

  //============================================================= 
  // Ícones
  //============================================================= 

  icones1: {
    color: "rgb(255, 255, 255)",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 200,
  },

  seta: {

  top: -20,
  left: -110,
  position: 'absolute',
 
  },

 bolaDePerfilBotao: {
  justifyContent: 'center',
  alignItems: 'center',
  width: 50,
  height: 50,
  backgroundColor: "rgb(255, 255, 255)",
  color: 'pink',
  position: 'absolute',
  borderRadius: 2000,

  borderColor: 'black',
  top: 10,
  left: 10,
  },

  bag: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: "rgb(255, 255, 255)",
    
    
  },

  //============================================================= 
  // Elementos gráficos
  //============================================================= 

  logo: {
    backgroundColor: "rgb(255, 255, 255)",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 30,
    width: 250,
    height: 250,
  },

  // atraslogin: {
  //   backgroundColor: "rgb(255, 255, 255)",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 1000,
  //   marginTop: 130,
  //   width: 200,
  //   height: 200,
  //   borderWidth: 1,
  //   borderColor: "rgb(244, 11, 93)",
  // },

  //============================================================= 
  // Barras
  //============================================================= 

  barraNoCantoInferior: {
    flex: 'container',
    position: 'absolute',
    bottom: 0,
    width: "100vw",
    backgroundColor: "rgb(248, 106, 149)",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  barraNoCantoSuperior: {
    position: 'absolute',
    top: 0,
    height: 80,
    width: "100vw",
    backgroundColor: "rgb(252, 142, 175)",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  containerProdutos: {
    paddingTop: 20,
    paddingBottom: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
  
  cardProduto: {
    backgroundColor: "#ffe6f0",
    width: 160,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  
  imagemProduto: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  
  nomeProduto: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  
  botaoComprar: {
    backgroundColor: "rgb(244, 11, 93)",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 15,
  },
  
  textoBotaoComprar: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  produtocaixa: {
    backgroundColor:'pink',
    border: 1,
    
  },

  caixahome: {
    width: 500,
    borderRadius: 30,
    top: 130,
    margin: 20,
    height: 150,
    backgroundColor: "rgb(206, 206, 206)",
    color: 'black',
    borderWidth: 1,
    borderColor: "rgb(148, 147, 147)",
  },

  caixahome2: {
    height: 100,
    width: 150,
    backgroundColor: "rgb(168, 168, 168)",
    borderRadius: 50,
    right: -30,
    top: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "rgb(136, 136, 136)",

  },

  boasVindasFundo: {
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor:"rgb(255, 170, 198)",
    width: 250,
    height: 50,
    position: "absolute",
    borderRadius: 100,
  },

  
  listaDeAlimentos: {
    top: 110,
    justifyContent:'center',
    alignItems: 'center',
    width: 400,
    height: 80,
    backgroundColor: 'gray',
    borderWidth: 1,
    margin: 2,
    borderRadius: 20,
  },
}
);
