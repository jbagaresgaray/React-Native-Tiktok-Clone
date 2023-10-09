import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../Themes/theme";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  user: {
    id: number;
    name: string;
    url: string;
  };
  tags: any[];
}

const VideoUserDetails: React.FC<Props> = ({ user, tags }) => {
  return (
    <View style={styles.VideoUserDetails}>
      <Text style={styles.User}>{user.name}</Text>
      {tags?.length > 0 && <Text style={styles.Tags}>{tags?.join(" ")}</Text>}
      <View style={styles.MusicBox}>
        <FontAwesome name="music" size={15} color="#f5f5f5" />
        <Text style={styles.Music}>{user.name}</Text>
      </View>
    </View>
  );
};

export default VideoUserDetails;

const styles = StyleSheet.create({
  VideoUserDetails: {
    position: "absolute",
    paddingVertical: 20,
    paddingHorizontal: 10,
    bottom: 0,
    zIndex: 10,
  },
  User: {
    fontSize: 17,
    lineHeight: 20.71,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 0,
    color: COLORS.white,
  },
  Tags: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 19,
    paddingVertical: 5,
    color: COLORS.white,
  },
  MusicBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  Music: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 19,
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 15,
    color: COLORS.white,
  },
});
