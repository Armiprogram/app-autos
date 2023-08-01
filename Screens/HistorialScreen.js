import { View, Text,FlatList,SectionList} from 'react-native'
import React from 'react'

import empleJSON from "./1-empleados.json"
export default function HistorialScreen(navigation) {
const datos= empleJSON
const secciones=[
  {title:"Tus empleados", data: datos.ventas }
]

  return (
    <View>
 <SectionList
sections={secciones}
renderItem={({item})=>(
    < View>
    <Text>{item.fecha} </Text>
    <Text>{item.cliente} </Text>
    <Text>{item.auto} </Text>
    <Text>{item.precio} </Text>
    <Text>{item.vendedor} </Text>
 
    </View>
) }
/>
    </View>
  )
}