import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LinhaRelatorio = ({ texto, numero }) => {
  return (
    <View style={styles.linhaView}>
      <Text style={styles.linhaText}>{texto}</Text>
      <Text style={styles.linhaText}>{numero}</Text>
    </View>
  );
};

export default LinhaRelatorio;

const styles = StyleSheet.create({
  linhaView: {
    borderTopWidth: 1,
    borderTopColor: "#669bbc",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  linhaText: {
    color: "gray",
    fontSize: 18,
  },
});
