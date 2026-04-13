import { View,Text } from "react-native-web";

export function Titulos(props) {
    return(
        <View>
            <Text>{props.titulo}</Text>
            <Text>{props.Subtitulo}</Text>
        </View>
    );
}