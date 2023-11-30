import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { Navigation } from "./src/navigation/Navigation";

export default function App() {
  return (
    <SafeAreaView>
      <Navigation />
    </SafeAreaView>
  );
}
