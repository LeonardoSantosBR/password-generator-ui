import Slider from "@react-native-community/slider";
import { styles } from "./index.styles";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../src/assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>20 caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={styles.slider}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#9BC568"
          minimumTrackTintColor="#414C98"
          thumbTintColor="#392de9"
        />
      </View>

      <TouchableOpacity style={styles.buttonGeneratePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  );
}
