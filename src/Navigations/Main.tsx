import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home";
import DiscoverScreen from "../Screens/Discover";
import InboxStack from "./InboxStack";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import LiveScreen from "../Screens/Live";
import HomeButton from "../Components/HomeButton";
import { useState } from "react";
import { COLORS } from "../Themes/theme";

const Tab = createBottomTabNavigator();

const HomeScreenOptions: BottomTabNavigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="home" size={24} color={color} />
  ),
};

const DiscoverScreenOptions: BottomTabNavigationOptions = {
  tabBarLabel: "Discover",
  tabBarIcon: ({ color }) => (
    <AntDesign name="search1" size={24} color={color} />
  ),
};

const InboxScreenOptions: BottomTabNavigationOptions = {
  tabBarLabel: "Inbox",
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons
      name="message-text-outline"
      size={24}
      color={color}
    />
  ),
};

const ProfileScreenOptions: BottomTabNavigationOptions = {
  tabBarLabel: "Me",
  tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
};

const MainTabs = () => {
  const [home, setHome] = useState(true);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: home ? COLORS.black : COLORS.white,
        },
        tabBarActiveTintColor: home ? COLORS.white : COLORS.black,
      }}
    >
      <Tab.Screen
        name="Home"
        listeners={{
          focus: () => setHome(true),
          blur: () => setHome(false),
        }}
        options={HomeScreenOptions}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Discover"
        options={DiscoverScreenOptions}
        component={DiscoverScreen}
      />
      <Tab.Screen
        name="Live"
        component={LiveScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate("Record");
          },
        })}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <HomeButton home={home} />,
        }}
      />
      <Tab.Screen
        name="InboxStack"
        options={InboxScreenOptions}
        component={InboxStack}
      />
      <Tab.Screen
        name="ProfileStack"
        options={ProfileScreenOptions}
        component={InboxStack}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
