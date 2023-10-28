import {View, Text, Button, TextInput} from 'react-native'
import {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {estilos} from '../css/estilos'

export default function Home(){

  return(
    <View> 
      <Text style={estilos.tituloMenu}> Tela de Home</Text>
      <View style={estilos.telaMenu}>
      
        <View style={estilos.itemMenuPrincipal}>
        <View style={estilos.iconeStyle}>
          <Icon name="users" size={50} color="blue"/>
        </View>
          <Text style={estilos.tituloItemMenu}>Clientes</Text>
        </View>

        <View style={estilos.itemMenuPrincipal}>
        <View style={estilos.iconeStyle}>
          <Icon name="money" size={50} color="green"/>
        </View>
          <Text style={estilos.tituloItemMenu}>Financeiro</Text>
        </View>

        <View style={estilos.itemMenuPrincipal}>
        <View style={estilos.iconeStyle}>
          <Icon name="star" size={50} color="yellow"/>
        </View>
          <Text style={estilos.tituloItemMenu}>Armazenagem</Text>
        </View>

        <View style={estilos.itemMenuPrincipal}>
        <View style={estilos.iconeStyle}>
          <Icon name="car" size={50} color="black"/>
        </View>
          <Text style={estilos.tituloItemMenu}>Logística</Text>
        </View>

      </View>
    </View>
  )
}