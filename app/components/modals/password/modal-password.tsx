import * as clipboard from "expo-clipboard";
import useStorage from "@/app/storage/useStorage";
import { styles } from "./modal-password.style";
import { View, Text, TouchableOpacity, Pressable } from "react-native";

export function ModalPassword({
  password,
  handleClose,
}: {
  password: string;
  handleClose: any;
}) {
  const { saveItem } = useStorage();

  async function handleCopyPassword() {
    await clipboard.setStringAsync(password);
    await saveItem("@pass", password);
    handleClose();
  }

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>Senha gerada 🎉</Text>

        <Pressable style={styles.passwordArea} onLongPress={handleCopyPassword}>
          <Text style={styles.password}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonSave]}
            onPress={handleCopyPassword}
          >
            <Text style={styles.buttonTextSave}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
