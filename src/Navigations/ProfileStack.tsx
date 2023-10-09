import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../Screens/Profile";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
