import { View, Text, StyleSheet,Button,ImageBackground} from 'react-native'
import React from 'react'

export default function DetallesScreen({navigation}) {
  return (
    <ImageBackground style={styles.container} 
    source={ {uri:"https://www.audesur.ec/audesurwp/wp-content/uploads/2023/03/image-5-1.jpg"} }
    >
      <Text style={{fontSize:40}}></Text>
      <Button
      title='Historial'
      onPress={()=> navigation.navigate("HistorialStack")}
      />
      <Text style={styles.txtC}>              </Text>
       <Button
      title='Información'
      onPress={()=> navigation.navigate("InformaStack")}
      />
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#696c',
      alignItems: 'center',
      justifyContent: 'center',

    },
    txtC:{
        color:"#252525",
        fontSize: 15,
        justifyContent:'center',
        alignItems:"baseline"
      }
  });
