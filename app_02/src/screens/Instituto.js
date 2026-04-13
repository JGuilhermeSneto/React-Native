import { View,Text,Button } from "react-native-web";

export default function Instituto({navigation}){
    return(
       <View>
        <Text>HAHAHAHHAHAHAH CORINGA A ENTREGAAAAAAAAAAA</Text>
        <Button
        title="voltar para index"
        onPress = {() => navigation.navigate('index')}
        />
       </View>  
    );
}