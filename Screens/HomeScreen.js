import { StatusBar } from 'expo-status-bar';
import { Alert,StyleSheet, Text,TextInput,Touchable,TouchableOpacity,View, Image, Button, ImageBackground} from 'react-native';

import React from 'react'
export default function App() {


  return (
    <ImageBackground style={styles.container} 
    source={ {uri:"https://www.audesur.ec/audesurwp/wp-content/uploads/2023/03/image-5-1.jpg"} }
    >
       <Text style={styles.txtTitle}>INGRESO DE DATOS</Text>
      <Text style={styles.txt}>Ingrese Usuario</Text>
      <TextInput
      placeholder='Usuario'
      style={styles.txtInput}
      />
      <Text style={styles.txt}>Ingrese Email</Text>
      <TextInput
      placeholder='Email'
      style={styles.txtInput}
      />
<Text style={styles.txt}>Ingrese Edad</Text>
<TextInput
      placeholder='Edad'
      style={styles.txtInput}

      />
      <Text style={styles.txt}>Ingrese Contraseña</Text>
<TextInput
      placeholder='Contraseña'
      style={styles.txtInput}

      />
      <Button
      title='Ir al home'
      onPress={()=> navigation.navigate("WelcomeStack")}
      />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
 

  },
  txtInput:{
borderColor: "#000000",
color:"#fff",
borderWidth:5,
padding:10,
marginBottom:10,
borderRadius:15,
width:"80%"
  },
  txtTitle:{
    color:"#fff",
    fontSize: 40
  },
  txt:{
    color:"#fff",
    fontSize: 25
  },
  btn:{
    backgroundColor:"#ffff",
    width: 200,
    height:50,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center"
  },
  img:{
width:50,
height:50
  }
});