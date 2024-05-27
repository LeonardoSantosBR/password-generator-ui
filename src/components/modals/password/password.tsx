import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./style";

export function ModalPassword({
  password,
  handleClose,
}: {
  password: string;
  handleClose: any;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>Senha gerada 🎉</Text>

        <Pressable style={styles.passwordArea}>
          <Text style={styles.password}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonTextSave}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
