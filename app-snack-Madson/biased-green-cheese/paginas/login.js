import {View, Text, Button, TextInput} from 'react-native'
import {Component} from 'react'
import {estilos} from '../css/estilos'

export default class Home extends Component{

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.tituloLogin}> Tela de Login</Text>

        <TextInput style={estilos.inputStyleText} placeholder="Usuario" />
        <TextInput style={estilos.inputStyleText} placeholder="Senha" />

        <Button title= "Logar"  onPress={()=>this.props.navigation.navigate('Home')}/>
      </View>
    )
  }
}