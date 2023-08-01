import { View, Text,StyleSheet,Image,ImageBackground,Button, ImageBase} from 'react-native'
import React from 'react'

export default function InformacionScreen() {
  return (
    <ImageBackground style={styles.container} 
    source={ {uri:"https://www.audesur.ec/audesurwp/wp-content/uploads/2023/03/image-5-1.jpg"} }
    >
      <Text style={styles.txtTitle}>Información</Text>
      <Image style={styles.imgg} source={ {uri:"https://jackflacco.files.wordpress.com/2016/01/tom-cruise-ethan-hunt-mission-impossible.jpg"} }/>
      <Text style={styles.txtC}>Nombre</Text>
      <Text style={styles.txtB}>Ethan Hunt</Text>
      <Text style={styles.txtC}>Correo</Text>
      <Text style={styles.txtA}>ethanhunt@hotmail.com</Text>
      <Button
      title='Cerrar sesión'
      onPress={()=> navigation.navigate("WelcomeStack")}
      />
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#000000",
      alignItems: 'center',
      justifyContent: 'center',
     
      
    },
    txtC:{
        color:"#fff",
        fontSize: 34,
        textAlign:"right"
      },
      txtA:{
        color:"#fff",
        fontSize: 20,
        textAlign:"right"
      },
      txtB:{
        color:"#fff",
        fontSize: 29,
        textAlign:"right"
      },
    txtTitle:{
         alignContent:"flex-end",
         alignItems:"flex-end",
         textAlignVertical:"top",
         alignSelf:"flex-start",
         textAlign:"right",
        color:"#fff",
        fontSize: 40
      },
      imgg:{
     width:100,
     height:100
     
      }
});