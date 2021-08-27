import React, { useState } from "react";
import { Image, View, Text, styleSheet, TouchableOpacity } from "react-native"


export default function App() {

  const [textFrase, setTextFrase] = useState('')
  const [img, setImg] = useState(require('./assets/biscoito.png'))

  //essas são as frases que vão aparecer ao abrir o biscoito
  let frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.']

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextFrase(frases[numeroAleatorio])
    setImg(require('./assets/biscoito.png'))
  }

  return (
    <View style={estilos.container}>
      <Image source={img} style={estilos.imgstyle} />
      <Text style={estilos.textFrase}>"{textFrase}"</Text>
      <TouchableOpacity style={estilos.button} onPress={quebraBiscoito}>
        <View style={estilos.buttonArea}>
          <Text style={estilos.buttonTexto}>Quebra o biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

}

const estilos = styleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'gray',
      alignItems: 'center',
      justifyContent: 'center'
  },
  textoFrase: {
      textAlign: 'center',
      fontSize: 25,
      margin: 35,
      color: '#dd7b22',
      fontstyle: 'italic'
  },
  imgstyle:{
      width: 350,
      height: 350
  },
  btn:{
      width: 230,
      height: 50,
      borderWidth: 2,
      borderColor: '#dd7b22',
      borderRadius: 25
  },
  btnArea:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  btnTexto:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#dd7b22'
  }
});