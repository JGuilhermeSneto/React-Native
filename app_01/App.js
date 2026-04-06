import { View,Text,StyleSheet } from "react-native"

/*
 Função básica precisa de default pode ser nomeada, sem nome e arrow function
 */


export default function App(){
  return (
    <View style={estilo_2.tela}>
      {
        /**
         * VIEW e TEXT são componentes da biblioteca do React Native 
         */
      }
      <Text>Bom dia</Text>
      <Text style={{color:'red'}}>Oi</Text>
      <Text style={estilo_1}>IFRN</Text>
      <Text style={estilo_2.texto}>TSI</Text>
    </View>
  );
}

const estilo_1 = {
  color:'blue',
  fontSize: 90
}


const estilo_2 = StyleSheet.create({
  tela: {
    backgroundColor: 'green',
  },
  texto: {
    fontWeight: 'bold',
    color: 'pink'
  }
})
