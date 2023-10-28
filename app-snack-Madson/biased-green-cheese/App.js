import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Login from './paginas/login'
import Home from './paginas/home'

const Drawer = createDrawerNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="TelaLogin" component={Login} options={{title: 'Tela de Login'}}/>
        <Drawer.Screen name="Home" component={Home}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
