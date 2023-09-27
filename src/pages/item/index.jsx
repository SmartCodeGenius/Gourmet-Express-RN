import React from "react";
import { View, Text } from "react-native";

export default function Item({props}){
    return(
        <View>
            <Text>{props.nome}</Text>
        </View>
    )
}