import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./style";

export function ModalPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>Senha gerada 🎉</Text>

        <Pressable style={styles.passwordArea}>
          <Text style={styles.password}>12345678</Text>
        </Pressable>
      </View>
    </View>
  );
}
