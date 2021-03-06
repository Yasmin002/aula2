import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [alcool, setValor1] = useState();
  const [gasolina, setValor2] = useState();
  const [resposta, setResposta] = useState();

  function calcular(){
    let resultado = parseFloat(alcool) / parseFloat(gasolina);
    if (resultado < 0.7) {
      setResposta("É mais vantajoso abastecer com álcool");
    } else {
      setResposta("É mais vantajoso abastecer com gasolina.");
    }
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.linha}>
        <View style = {styles.coluna}>

          <Text style = {styles.texto}> Valor do litro do álcool: </Text>
          <TextInput style = {styles.input} keyboardType="numeric" value={alcool} onChangeText={(texto)=>setValor1(texto)} />
        </View>

        <View style = {styles.coluna}>
          <Text style = {styles.texto}> Valor do litro da gasolina: </Text>
          <TextInput style = {styles.input} keyboardType = "numeric" value = {gasolina} onChangeText={(texto)=>setValor2(texto)} />
        </View>
      </View>
    <View>
        <TouchableOpacity style = {styles.botao} onPress = {calcular}>
          <Text style = {styles.texto}> Calcular </Text>
        </TouchableOpacity>
      </View>


      <View> 
        <Text style = {styles.texto}> {resposta} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Arial',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3F5F5'
  },

  input: {
    borderColor: '#5CC7C7',
    borderWidth: 2,
    padding: 10,
    margin: 15,

  },


  texto: {
    fontSize: 24,
  },

  botao: {
    backgroundColor: '#2B9E9E',
    padding: 10,
    marginBottom: 10,
    alignItems:'center',
  },
});