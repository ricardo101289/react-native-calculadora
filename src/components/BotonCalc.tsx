import React from "react";
import { Text, Touchable, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/app.Theme";

interface Props {
    texto: string,
    color?: string,
    ancho?: number,
    accion: (numeroTexto: string)=>void,
}
export const BotonCalc = ({ texto, color = "#2D2D2D", ancho = 80, accion }: Props) => {
    return (
        <TouchableOpacity onPress={() => accion(texto)}>
            <View style={[styles.boton, { backgroundColor: `${color}`, width: ancho }]}>
                <Text style={styles.botonTexto}>{texto}</Text>
            </View>
        </TouchableOpacity>

    );
};

