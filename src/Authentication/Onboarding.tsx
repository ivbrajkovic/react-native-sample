import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "cyan",
  },
});

interface OnboardProps {}

const Onboard = () => {
  return (
    <View style={styles.root}>
      <View />
    </View>
  );
};

export default Onboard;
