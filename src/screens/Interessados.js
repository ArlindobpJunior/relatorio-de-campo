import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Pessoa from "../components/Pessoa";

const Interessados = () => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [celular, setCelular] = useState("");
  const [revisitar, setRevisitar] = useState("");
  const [assunto, setAssunto] = useState("");

  const handlePessoa = () => {};

  return (
    <LinearGradient colors={["#669bbc", "#001233"]} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.superiorView}>
          <Text style={styles.intereressadosView}>Interessados</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Endereço"
              value={endereco}
              onChangeText={setEndereco}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Celular"
              keyboardType="numeric"
              value={celular}
              onChangeText={setCelular}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Dia e hora para revisitar"
              value={revisitar}
              onChangeText={setRevisitar}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Assunto"
              multiline
              numberOfLines={3}
              value={assunto}
              onChangeText={setAssunto}
            />
            <TouchableOpacity style={styles.submit} onPress={handlePessoa}>
              <FontAwesome5 name="plus-circle" size={40} color={"#c1121f"} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={[
            {
              id: 1,
              nome: "Arlindo Junior",
              endereco: "Rua Otto Stupakoff, 533",
              celular: "997700870",
              revisitar: "Sexta 9:30",
              assunto: "Deixei a brochura. Voltar e iniciar o estudo",
            },
            {
              id: 2,
              nome: "Arlindo Junior",
              endereco: "Rua Otto Stupakoff, 533",
              celular: "997700870",
              revisitar: "Sexta 9:30",
              assunto: "Deixei a brochura. Voltar e iniciar o estudo",
            },
          ]}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Pessoa data={item} />}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Interessados;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  superiorView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  intereressadosView: {
    fontWeight: "bold",
    fontSize: 20,
  },
  form: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#669bbc",
    marginRight: 5,
    marginVertical: 5,
    fontSize: 16,
  },
  submit: {
    justifyContent: "center",
    margin: 5,
  },
  list: {
    marginTop: 20,
  },
});
