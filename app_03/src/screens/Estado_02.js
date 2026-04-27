import { View,Text,Button } from "react-native";
import { useState } from "react";




export default function App(){
    const [numero, setNumero] = useState(0);

    return(
        <View>
            <Text>Estado 02</Text>
            <Text>{numero}</Text>
            <Button
            title="Mudar"
            onPress={() => setNumero(numero+1)} />
        </View>
    );
    
}