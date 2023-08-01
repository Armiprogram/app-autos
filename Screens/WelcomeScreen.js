import { View, Text, Button,StyleSheet,TextInput,ImageBackground } from 'react-native'
import React from 'react'


export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground style={styles.container} 
    source={ {uri:"https://www.sanisidro.gob.ar/sites/default/files/img/styles/galeria_800x550/public/0_0.jpg?itok=ORghPpLK"} }
    >
    
      <Text style={styles.txt}>Correo</Text>
      <TextInput
      placeholder='Correo'
      style={styles.txtInput}
      />
      <Text style={styles.txt}>Contraseña</Text>
      <TextInput
      placeholder='Contraseña'
      style={styles.txtInput}
      />
      <Text style={styles.txtC}>Olvido su contraseña...?</Text>
      <Button
      title='Registrarse'
      onPress={()=> navigation.navigate("HomeStack")}
      />
      <Text style={styles.txtC}>              </Text>
       <Button
      title='Ingresar'
      onPress={()=> navigation.navigate("DetalleStack")}
      />
      
    </ImageBackground>
  
  
  )
}
const styles=StyleSheet.create({
container:{

    justifyContent:"center",
    alignItems:"center",
    flex:1,
},  txtInput:{
    borderColor: "#000000",
    color:"#ffffff",
    borderWidth:5,
    padding:10,
    marginBottom:10,
    borderRadius:15,
    width:"80%"
      },
      txtC:{
        color:"#ffffff",
        fontSize: 15,
        justifyContent:'center',
        alignItems:"baseline"
      },
      txt:{
        color:"#ffffff",
        fontSize: 25
      },
      btn:{
        backgroundColor:"#c0c0c0",
        width: 200,
        height:50,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
      },
      img:{
    width:200,
    height:200
      }
})