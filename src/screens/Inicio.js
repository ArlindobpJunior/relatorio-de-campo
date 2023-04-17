import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import LinhaRelatorio from "../components/LinhaRelatorio";

const Inicio = () => {
  return (
    <LinearGradient colors={["#669bbc", "#001233"]} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.superiorView}>
          <View style={styles.titulo}>
            <Text style={styles.tituloText}>Relatório do mês atual</Text>
          </View>
          <LinhaRelatorio texto={"Horas"} numero={"0"} />
          <LinhaRelatorio texto={"Horas LDC"} numero={"0"} />
          <LinhaRelatorio texto={"Publicações"} numero={"0"} />
          <LinhaRelatorio texto={"Vídeos mostrados"} numero={"0"} />
          <LinhaRelatorio texto={"Revisitas"} numero={"0"} />
          <LinhaRelatorio texto={"Estudos"} numero={"0"} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  superiorView: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  titulo: {
    marginBottom: 30,
  },
  tituloText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
