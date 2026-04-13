import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from './src/screens/index'



const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
      <Stack.Screen name = "index" component = {index} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
