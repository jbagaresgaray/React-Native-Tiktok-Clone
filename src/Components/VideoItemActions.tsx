import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../Themes/theme";
import UserAvatar from "./UserAvatar";

interface Props {
  play: boolean;
  onPressComment: () => void;
}

const VideoItemActions: React.FC<Props> = ({ play, onPressComment }) => {
  return (
    <View style={styles.VideoItemActions}>
      <TouchableOpacity style={styles.BoxAction} activeOpacity={0.8}>
        <UserAvatar />
      </TouchableOpacity>
      <TouchableOpacity style={styles.BoxAction} activeOpacity={0.8}>
        <AntDesign
          style={{ alignSelf: "center" }}
          name="heart"
          size={35}
          color={COLORS.default}
        />
        <Text style={styles.TextAction}>200.0K</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.BoxAction}
        activeOpacity={0.8}
        onPress={onPressComment}
      >
        <Ionicons
          style={{ alignSelf: "center" }}
          name="chatbox-ellipses"
          size={35}
          color={COLORS.default}
        />
        <Text style={styles.TextAction}>64</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BoxAction} activeOpacity={0.8}>
        <FontAwesome
          style={{ alignSelf: "center" }}
          name="bookmark"
          size={35}
          color={COLORS.default}
        />
        <Text style={styles.TextAction}>150K</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BoxAction} activeOpacity={0.8}>
        <FontAwesome
          style={{ alignSelf: "center" }}
          name="share"
          size={35}
          color={COLORS.default}
        />
        <Text style={styles.TextAction}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoItemActions;

const styles = StyleSheet.create({
  VideoItemActions: {
    flexDirection: "column",
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    bottom: 0,
    right: 10,
    zIndex: 10,
  },
  BoxAction: {
    paddingVertical: 11,
  },
  TextAction: {
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.white,
    fontWeight: "600",
    paddingVertical: 5,
    textAlign: "center",
  },
});
