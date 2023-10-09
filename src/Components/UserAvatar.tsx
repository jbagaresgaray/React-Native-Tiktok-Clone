import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS } from "../Themes/theme";

const UserAvatar = () => {
  return (
    <View style={styles.UserAvatar}>
      <Image
        source={{
          uri: "https://avatars3.githubusercontent.com/u/3625802",
        }}
        contentFit="cover"
        style={styles.Image}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  UserAvatar: {
    width: 47,
    height: 47,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  Image: {
    width: 47,
    height: 47,
    borderRadius: 50,
  },
});
