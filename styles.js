import { StyleSheet } from 'react-native';

// Cores utilizadas:
// rgb(244, 11, 93)
// rgb(204, 11, 79)
// rgb(255, 242, 249)
// rgb(253, 206, 222)

export default StyleSheet.create({

  // ----- Containers principais -----
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

  // ----- Botões -----
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

  // ----- Inputs -----
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

  // ----- Textos -----
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
    fontSize: 27,
    fontFamily: "bold",
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
    textAlign: 'center'
  },

  // ----- Ícones -----
  icones1: {
    color: "rgb(29, 29, 29)",
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 200,
  },

 bolaDePerfilBotao: {
  width: '20px',
  height: '20px',
  color: "rgb(29, 29, 29)",
  position: 'absolute',
  left: 3,
  top: 0,
  padding: 10,
  },

  bag: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  // ----- Elementos gráficos -----
  logo: {
    backgroundColor: "rgb(255, 255, 255)",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 30,
    width: 150,
    height: 150,
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

  // ----- Barra inferior -----
  barraNoCantoInferior: {
    position: 'absolute',
    bottom: 0,
    width: "100vw",
    backgroundColor: "rgb(172, 172, 172)",
    borderTopWidth: 1,
    borderTopColor: "rgb(54, 53, 53)",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  //-------- Cantina ----------
  item1:{
    backgroundColor:'pink',
  }
 

  // homenav: {
  //   backgroundColor: 'pink',
  //   width: 30
  // },
  
    // logo2: {
    //   width: 70,
    //   height: 70,
    // },
    // logoContainer:{
    //   alignSelf:'flex-start',
    //   padding: 10,
    // }
});
