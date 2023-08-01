import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import DetallesScreen from '../Screens/DetallesScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import HistorialScreen from '../Screens/HistorialScreen';
import InformacionScreen from '../Screens/InformacionScreen';
const Stack = createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator initialRouteName='WelcomeStack'>
            <Stack.Screen name='HomeStack' component={HomeScreen}/>
            <Stack.Screen name='DetalleStack' component={DetallesScreen}/>
            <Stack.Screen 
      name="WelcomeStack" 
      component={WelcomeScreen}
      options={{heraderShown:false} }
      />
      <Stack.Screen name='HistorialStack' component={HistorialScreen}/>
      <Stack.Screen name='InformaStack' component={InformacionScreen}/>
              </Stack.Navigator>
    )

}
export default function StackNavigation(){
    return(
        <NavigationContainer >
           <MyStack />
        </NavigationContainer>
    )
}