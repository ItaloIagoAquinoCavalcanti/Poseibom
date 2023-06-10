import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const Check = () => {
  const navigate = useNavigation();
  return (
    <Pressable style={styles.check} onPress={() => navigate.navigate('TelaHome')} >
      <View style={styles.checkChild} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkChild: {
    position: "absolute",
    top: 323,
    left: 103,
    borderRadius: 217,
    backgroundColor: Color.cornflowerblue_200,
    width: 154,
    height: 154,
  },
  check: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Check;
