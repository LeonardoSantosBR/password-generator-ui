import { useState } from "react";
import Slider from "@react-native-community/slider";
import { styles } from "./index.styles";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [caracterSize, setCaracterSize] = useState(10);

  return (
    <View style={styles.container}>
      <Image
        source={require("../src/assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{caracterSize} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={styles.slider}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#9BC568"
          minimumTrackTintColor="#414C98"
          thumbTintColor="#392de9"
          value={caracterSize}
          onValueChange={(value) => setCaracterSize(Number(value.toFixed(0)))}
        />
      </View>

      <TouchableOpacity style={styles.buttonGeneratePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  );
}
