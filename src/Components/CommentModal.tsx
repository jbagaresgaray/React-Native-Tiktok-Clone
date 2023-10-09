import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ActionSheet, {
  ActionSheetRef,
  FlashList,
} from "react-native-actions-sheet";
import { FAKE_ARR } from "../Constants";
import CommentItem from "./CommentItem";

const CommentModal = () => {
  const renderItem = () => {
    return <CommentItem />;
  };

  return (
    <ActionSheet gestureEnabled id="VideoItemCommentModal" isModal>
      <View>
        <Text>579 comments</Text>
      </View>
      <FlashList
        data={FAKE_ARR}
        renderItem={renderItem}
        estimatedItemSize={500}
      />
    </ActionSheet>
  );
};

export default CommentModal;

const styles = StyleSheet.create({});
