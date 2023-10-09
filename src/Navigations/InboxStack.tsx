import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InboxScreen from "../Screens/Inbox";

const Stack = createNativeStackNavigator();

const InboxStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inbox" component={InboxScreen} />
    </Stack.Navigator>
  );
};

export default InboxStack;
