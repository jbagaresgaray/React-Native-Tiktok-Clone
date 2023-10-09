import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../Themes/theme";

const CommentItem = () => {
  return (
    <View style={styles.CommentItem}>
      <Image
        source={{
          uri: "https://avatars3.githubusercontent.com/u/3625802",
        }}
        contentFit="cover"
        style={styles.UserAvatar}
      />
      <View>
        <Text>martini_rond</Text>
        <Text>
          How neatly I write the date in my book <Text>22h</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.BoxAction} activeOpacity={0.8}>
        <AntDesign
          style={{ alignSelf: "center" }}
          name="hearto"
          size={35}
          color={COLORS.default}
        />
        <Text style={styles.TextAction}>200.0K</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  CommentItem: {
    flexDirection: "row",
  },
  UserAvatar: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  BoxAction: {},
  TextAction: {
    fontSize: 13,
    lineHeight: 15.83,
    color: COLORS.comment,
  },
});
