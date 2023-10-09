import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ResizeMode, Video } from "expo-av";
import VideoUserDetails from "./VideoUserDetails";
import VideoItemActions from "./VideoItemActions";
import { SheetManager } from "react-native-actions-sheet";

interface VideoFiles {
  id: number;
  quality: string;
  file_type: string;
  width: number;
  height: number;
  fps: number;
  link: string;
}

interface VideoPictures {
  id: number;
  nr: number;
  picture: string;
}

interface VideoProps {
  id: number;
  height: number;
  width: number;
  url: string;
  image: string;
  full_res: any;
  avg_color: any;
  tags: any[];
  duration: number;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: VideoFiles[];
  video_pictures: VideoPictures[];
}

interface Props {
  play: boolean;
  item: VideoProps;
}

const VideoItem: React.FC<Props> = ({ item, play }) => {
  const video_file = useMemo(() => {
    return item.video_files.filter((itm) => itm.quality === "hd")[0]?.link;
  }, [item]);

  const onPressComment = () => {
    SheetManager.show("VideoItemCommentModal");
  };

  return (
    <View style={styles.VideoItem}>
      <LinearGradient
        colors={["rgba(0,0,0,.3)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "70%",
        }}
      />
      <View style={styles.VideoContainer}>
        <Video
          source={{
            uri: video_file,
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode={ResizeMode.COVER}
          shouldPlay={play}
          isLooping
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <VideoUserDetails user={item.user} tags={item.tags} />
      <VideoItemActions play={play} onPressComment={onPressComment} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,.4)"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "50%",
        }}
      />
    </View>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
  VideoItem: {
    flex: 1,
    position: "relative",
  },
  VideoContainer: {
    flex: 1,
  },
});
