// import {
//   Animated,
//   Easing,
// } from "react-native";
// import React from "react";
// import { Image } from "expo-image";
// import Lottie from "lottie-react-native";

// import musicFly from "../Assets/lottie-animations/music-fly.json";

// const VideoAnimatedPlay = ({ play }: { play: boolean }) => {
//   const spinValue = new Animated.Value(0);

//   Animated.loop(
//     Animated.timing(spinValue, {
//       toValue: 1,
//       duration: 10000,
//       easing: Easing.linear,
//       useNativeDriver: true,
//     })
//   ).start();

//   const rotateProp = spinValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ["0deg", "360deg"],
//   });

//   return (
//     <>
//       <Animated.View
//         style={{
//           borderRadius: 50,
//           borderWidth: 12,
//           borderColor: "#292929",
//           transform: [
//             {
//               rotate: play ? rotateProp : 0,
//             },
//           ],
//         }}
//       >
//         <Image
//           style={{
//             width: 35,
//             height: 35,
//             borderRadius: 25,
//           }}
//           source={{
//             uri: "https://avatars3.githubusercontent.com/u/45601574",
//           }}
//         />
//       </Animated.View>

//       <Lottie
//         source={musicFly}
//         progress={play ? spinValue : 0}
//         style={{ width: 150, position: "absolute", bottom: 0, right: 0 }}
//       />
//     </>
//   );
// };

// export default VideoAnimatedPlay;
