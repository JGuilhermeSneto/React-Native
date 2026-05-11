import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList
} from "react-native";

export default function Cursos(){

    const [cursos, setCursos] = useState([]);
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [vagas, setVagas] = useState('');

    function adicionar(){

        let novo_Curso = {
            'id': id,
            'titulo': titulo,
            'vagas': vagas
        }

        setCursos([...cursos, novo_Curso]);

        setId('');
        setTitulo('');
        setVagas('');
    }

    function editar(item){

        setId(item.id);
        setTitulo(item.titulo);
        setVagas(item.vagas);
    }

    function atualizar(){

        let nova_lista = [];

        for(let i = 0; i < cursos.length; i++){

            if(cursos[i].id == id){

                nova_lista[i] = {
                    'id': id,
                    'titulo': titulo,
                    'vagas': vagas
                }

            }else{

                nova_lista[i] = cursos[i];
            }
        }

        setCursos(nova_lista);

        setId('');
        setTitulo('');
        setVagas('');
    }

    function remover(id){

        let nova_lista = [];

        for(let i = 0; i < cursos.length; i++){

            if(cursos[i].id != id){

                nova_lista.push(cursos[i]);
            }
        }
        

        setCursos(nova_lista);
    }

    return(

        <View>

            <Text>Cursos</Text>

            <Text>Título:</Text>

            <TextInput
                value={titulo}
                onChangeText={setTitulo}
            />

            <Text>ID:</Text>

            <TextInput
                value={id}
                onChangeText={setId}
            />

            <Text>Vagas:</Text>

            <TextInput
                value={vagas}
                onChangeText={setVagas}
            />

            <Button
                title="Adicionar"
                onPress={adicionar}
            />

            <Button
                title="Atualizar"
                onPress={atualizar}
            />

            <FlatList
                data={cursos}

                keyExtractor={(item) => item.id}

                renderItem={({item}) => (

                    <View>

                        <Text>
                            {item.titulo}, {item.id}, {item.vagas}
                        </Text>

                        <Button
                            title="Editar"
                            onPress={() => {editar(item)}}
                        />

                        <Button
                            title="Remover"
                            onPress={() => {remover(item.id)}}
                        />

                    </View>
                )}
            />

        </View>
    )
}