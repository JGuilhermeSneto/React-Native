import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Index from "./src/screens/index";
import Instituto from "./src/screens/Instituto";
import Noticias from "./src/screens/Noticias";
import Disciplina from "./src/screens/Disciplina";
import Noticias from "./src/screens/Noticias";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Instituto" component={Instituto} />
        <Stack.Screen name="Noticias" component={Noticias} />
        <Stack.Screen name="Disciplina" component={Disciplina}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}