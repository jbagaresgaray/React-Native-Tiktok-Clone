import React from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS } from "../Themes/theme";

interface Props {
  home: boolean;
}

const HomeButton: React.FC<Props> = ({ home }) => {
  return (
    <View
      style={{
        ...styles.HomeButton,
        backgroundColor: home ? COLORS.white : COLORS.black,
      }}
    >
      <TouchableOpacity>
        <FontAwesome5
          name="plus"
          size={18}
          color={home ? COLORS.black : COLORS.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  HomeButton: {
    top: 3,
    width: 45,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderLeftColor: COLORS.blue,
    borderRightColor: COLORS.pink,
  },
});
