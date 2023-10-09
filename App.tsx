import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootStackScreen from "./src/Navigations/Root";
import { SheetProvider, registerSheet } from "react-native-actions-sheet";
import CommentModal from "./src/Components/CommentModal";

registerSheet("VideoItemCommentModal", CommentModal);

export default function App() {
  const [ready, setReady] = useState(false);

  const onLaunch = useCallback(async () => {
    // Add SplashScreen here
    setReady(true);
  }, []);

  useEffect(() => {
    onLaunch();
  }, [onLaunch]);

  const NotReady = useMemo(() => {
    // [Tip]
    // You can show loading state here.
    return <></>;
  }, [ready]);

  if (!ready) return NotReady;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <SheetProvider>
          <RootStackScreen />
        </SheetProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
