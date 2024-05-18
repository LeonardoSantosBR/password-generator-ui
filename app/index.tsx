import { View, Image, Text } from "react-native";
import { styles } from "./index.styles";
import Slider from "@react-native-community/slider";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../src/assets/images/logo.png")}
        style={styles.logo}
      />

      <Text>20 caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={styles.slider}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="green"
          minimumTrackTintColor="#414C98"
          thumbTintColor="#392de9"
        />
      </View>
    </View>
  );
}
