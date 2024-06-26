import Slider from "@react-native-community/slider";
import { useState } from "react";
import { styles } from "./home.styles";
import { View, Image, Text, TouchableOpacity, Modal } from "react-native";
import { ModalPassword } from "@/app/components/modals/password/modal-password";

export function Home() {
  const [caracterSize, setCaracterSize] = useState(10);
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const generatePassword = () => {
    let newPassword = "";
    const charset = "s53sfasdf245dflka345234hsdlcam453045781haldkfjan";

    for (let i = 0, n = charset.length; i < caracterSize; ++i) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(newPassword);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
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

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword
          password={password}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}
