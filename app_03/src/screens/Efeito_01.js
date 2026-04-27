import { View,Text,Button,FlatList } from "react-native";


/*
useEffect - Hook do React native que executa código fora do fluxo normal de renderização da tela ou componente principal
(Efeito colateral)
- Acesso a API ou persistência
- "Escutar" eventos e reage a mudanças
- Entre outros... 

*/


export default function App(){
    let lista = ['Segunda', 'Terça', 'Quarta','Quinta','Sexta'];





    /*
    useEffect(() =>{
        alert("Página carregando..................");
    },[])
    */

    return(
        <View>
            <Text>Efeito 01</Text>
            <Text>Forma Tradicional: {lista[1]}</Text>
            {
                lista.map((item) =>{
                    return<Text>{item}</Text>
                })
            }

            

            {

                lista.map((item) =>(
                    <Text>{item}</Text>
                ))
            }
            

            
            {

                lista.map((item) =>(
                    <Text>{item}</Text>
                ))
            }


            {

                lista.map((item, index) =>(
                    <Text key={item}>{index} - {item}</Text>
                ))
            }


            <FlatList 
            data={lista}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item}) => (<Text>{item}</Text>)}
            
            />


        </View>
    );
    
}












/*

numeros = [1,2,3,4,5,6,7,8,9,0];
let resultados = numeros.map((num)=>{
    return num * 2;
})

*/