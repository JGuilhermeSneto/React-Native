import { use, useState } from "react";
import { View,Text,TextInput,Button,FlatList } from "react-native";

export default function Cursos(){

    const [cursos, setCursos] = useState([]);
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [vagas, setVagas] = useState('');


    return (
        <View>
            <Text>Cursos </Text>
            <TextInput/>


            <Text>Título: </Text>
            <TextInput
            value={titulo}
            onChangeText={setTitulo} />

            <Text>ID:</Text>
            <TextInput
            value={id}
            onChangeText={setId} />

            <Text>Vagas: </Text>
            <TextInput
            value={vagas}
            onChangeText={setVagas} />


            <Button title="Adicionar" />



            <FlatList 
            data={cursos}
            keyExtractor={(item)=> item.id}
            renderItem={}
            />


        </View>
    )
}