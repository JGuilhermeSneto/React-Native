import { View, Text, Button } from 'react-native';

export default function Index({navigation}){
   
    return (
        <View>
            <Text>Tela Inicial</Text>
            <Button 
            title='Ir para estado 01'
            onPress={() => navigation.navigate("Estado_01")}
            />

            <Button 
            title='Ir para estado 02'
            onPress={() => navigation.navigate("Estado_02")}
            />

            <Button 
            title='Ir para estado 03'
            onPress={() => navigation.navigate("Estado_03")}
            />
            <Button 
            title='Ir para estado 04'
            onPress={() => navigation.navigate("Estado_04")}
            />

             <Button 
            title='Ir para Efeito'
            onPress={() => navigation.navigate("Efeito_01")}
            />
            
        </View>
    );
}