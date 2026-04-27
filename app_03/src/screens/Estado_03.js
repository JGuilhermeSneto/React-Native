import { View,Text,Button } from "react-native";
import { useState } from "react";




export default function App(){
    const [numero, setNumero] = useState(0);


    function contar(){
        let num = numero+1;
        setNumero(num);
    }

    

    return(
        <View>
            <Text>Estado 03</Text>
            <Text>{numero}</Text>
            <Button
            title="Contar"
            onPress={() => contar()} />
        </View>
    );
    
}