import Slider from "@react-native-community/slider";
import { useState } from "react";
import { styles } from "./index.styles";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [caracterSize, setCaracterSize] = useState(10);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let newPassword = "";
    const charset = "s53sfasdf245dflka345234hsdlcam453045781haldkfjan";

    for (let i = 0, n = charset.length; i < caracterSize; ++i) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(newPassword);
  };

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

      <TouchableOpacity
        style={styles.buttonGeneratePassword}
        onPress={generatePassword}
      >
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  );
}
