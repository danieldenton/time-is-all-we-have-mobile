import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, TouchableOpacity, Linking } from "react-native";
import { navProps } from "../navigation/navProps";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";


export const ContactScreen = ({ navigation }: navProps) => {

  return (
    <SafeAreaView style={styles.container}>
      <NavBar navigation={navigation} />
      <Text style={styles.textHeader}>Daniel Denton</Text>
      <Text style={styles.textSubHeader}>Software Developer</Text>
      <Text style={styles.text}>DanielMDenton@gmail.com</Text>
      <Text style={styles.text}>+1 (323) 363-3279</Text>
      <TouchableOpacity
              onPress={() => Linking.openURL("https://www.linkedin.com/in/danielmdenton/")}
            >
              <Text style={styles.linkText}>LinkedIn</Text>
            </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
