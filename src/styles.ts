import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  textHeader: {
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "#20232a",
    fontSize: 20,
    margin: 2
  },
  linkText: {
    color: "#4169E1",
    fontSize: 20,
    fontWeight: "bold",
    margin: 2
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  buttonFont: {
    fontWeight: "bold",
  },
  navButtonContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    flexWrap: "wrap",
    marginBottom: 250
  },
});
