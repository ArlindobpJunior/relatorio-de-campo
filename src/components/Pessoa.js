import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const Pessoa = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.linhaView}>
        <Ionicons name="person" size={16} color="#669bbc" />
        <Text style={styles.linhaText}>{data.nome}</Text>
      </View>
      <View style={styles.linhaView}>
        <FontAwesome5 name="home" size={16} color="#669bbc" />
        <Text style={styles.linhaText}>{data.endereco}</Text>
      </View>
      <View style={styles.linhaView}>
        <FontAwesome5 name="phone" size={16} color="#669bbc" />
        <Text style={styles.linhaText}>{data.celular}</Text>
      </View>
      <View style={styles.linhaView}>
        <Ionicons name="time-outline" size={16} color="#669bbc" />
        <Text style={styles.linhaText}>{data.revisitar}</Text>
      </View>
      <View style={styles.linhaView}>
        <FontAwesome5 name="book-open" size={16} color="#669bbc" />
        <Text style={styles.linhaText}>{data.assunto}</Text>
      </View>
    </View>
  );
};

export default Pessoa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  linhaView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  linhaText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
