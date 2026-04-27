import { View,Text,Button } from "react-native";
import { useState } from "react";


/**
 * Os componentes do React Native não possuem estado (estáticos) - atualizar em tempo real
 - Resolução: Hooks de estado - useState 
 -Permite alterar o estado através de um componente funcional;
 
*/


export default function App(){
    //let nome = "Guilherme";
    const [nome , setNome] = useState('Guilherme');

    return(
        <View>
            <Text>Estado 01</Text>
            <Text>{nome}</Text>
            <Button
            title="Mudar"
            onPress={() => setNome('José Guilherme')} />
        </View>
    );
    
}