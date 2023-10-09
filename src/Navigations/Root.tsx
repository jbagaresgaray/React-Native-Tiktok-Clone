import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./Main";
import LiveScreen from "../Screens/Live";

const Stack = createNativeStackNavigator();

const RootStackScreen: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Record"
        component={LiveScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
