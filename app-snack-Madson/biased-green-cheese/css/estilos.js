import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#00FFFF',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35
  },
  inputStyleText:{
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 15,
    padding: 8
  },
  tituloLogin:{
    color: '#3740fe',
    marginBottom:10,
    textAlign: 'center',
    fontSize: 24

  },
  tituloMenu:{
    color: '#3740fe',
    marginBottom:10,
    textAlign: 'center',
    fontSize: 16,
  },
  telaMenu:{
    margin: 5,
    direction: 'column',
    display: 'block',
  },
  itemMenuPrincipal:{
    backgroundColor: 'gray',
    height: 100,
    width: '45%',
    borderRadius: 8,
    display: 'inline-block',
    textAlign: 'center',
    margin: 5,
  },

  tituloItemMenu:{
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    },

  iconeStyle:{
    alignItems:'center',
    marginTop: 15, 
  }
})