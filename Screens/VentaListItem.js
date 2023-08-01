import React from "react";
import { Text,View } from "react-native";
export default function VentaListItem({venta}){
    return(
        <View>
            <Text>REGISTRO DE VENTAS </Text>
            <Text>{venta.id} </Text>
            <Text>{venta.fecha} </Text>
        <Text>{venta.cliente} </Text>
        <Text>{venta.auto} </Text>
        <Text>{venta.precio} </Text>
        <Text>{venta.vendedor} </Text>
      </View>
    );
}