import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Screens
import Inicio from "./screens/Inicio";
import Interessados from "./screens/Interessados";
import Calendario from "./screens/Calendario";

const Root = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Inicio") {
            iconName = focused ? "md-home-sharp" : "md-home-outline";
          } else if (route.name === "Interessados") {
            iconName = focused ? "people-sharp" : "people-outline";
          } else if (route.name === "Agenda") {
            iconName = focused ? "md-calendar" : "md-calendar-outline";
          }
          return <Ionicons name={iconName} size={24} color={"#669bbc"} />;
        },
        headerTitle: "RELATÓRIO DE CAMPO",
        headerStyle: { backgroundColor: "#669bbc" },
        headerTintColor: "#fff",
      })}
    >
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Interessados" component={Interessados} />
      <Tab.Screen name="Agenda" component={Calendario} />
    </Tab.Navigator>
  );
};

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
