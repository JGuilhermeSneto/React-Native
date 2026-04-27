import { View,Text,Button, TextInput} from "react-native";
import { useState } from "react";




export default function App(){

    const [nome , setNome] = useState('');

    const [cadastro, setCadastro] = useState('')


    function atualizar(){
        setNome(cadastro);
        setCadastro('');
    }


    return(
        <View>    
            <Text>Estado 04</Text>
            <TextInput
            value={nome}
            onChangeText={setNome}

            />
            <Text>Nome Digitado pelo Usuário: {nome}</Text>
            <TextInput
            value={cadastro} onChangeText={setCadastro}
            />
            <Button 
            title="atualizar"
            onPress={atualizar}
            />
        </View>
    );
    
}