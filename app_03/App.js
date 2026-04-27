import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Index from "./src/screens/Index";
import Estado_01 from "./src/screens/Estado_01";
import Estado_02 from "./src/screens/Estado_02";
import Estado_03 from "./src/screens/Estado_03";
import Estado_04 from "./src/screens/Estado_04";
import Efeito_01 from "./src/screens/Efeito_01";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Estado_01" component={Estado_01} />
      <Stack.Screen name="Estado_02" component={Estado_02} />
      <Stack.Screen name="Estado_03" component={Estado_03} />
      <Stack.Screen name="Estado_04" component={Estado_04} />
      <Stack.Screen name="Efeito_01" component={Efeito_01} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}