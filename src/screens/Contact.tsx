import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Linking } from "react-native";
import { StackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navbar/NavBar";

export const ContactScreen = ({ navigation }: StackScreenProps) => {
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} routeIndex={4} />
      <Text style={styles.textHeader}>Daniel Denton</Text>
      <Text style={styles.text}>DanielMDenton@gmail.com</Text>
      <Text style={styles.text}>+1 (323) 363-3279</Text>
      <TouchableOpacity
              onPress={() => Linking.openURL("https://www.linkedin.com/in/danielmdenton/")}
            >
              <Text style={styles.linkText}>LinkedIn</Text>
            </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
