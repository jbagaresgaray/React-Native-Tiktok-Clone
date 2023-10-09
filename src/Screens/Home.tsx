import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PagerView from "react-native-pager-view";
import Videos from "../Services/videos.json";
import VideoItem from "../Components/VideoItem";

const HomeScreen = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      <PagerView
        onPageSelected={(e) => {
          console.log("active: ", e.nativeEvent.position);
          setActive(e.nativeEvent.position);
        }}
        orientation="vertical"
        style={styles.viewPager}
        initialPage={0}
      >
        {Videos.videos.map((item, index) => (
          <View key={item.id}>
            <VideoItem item={item} play={index === active} />
          </View>
        ))}
      </PagerView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
  },
});
