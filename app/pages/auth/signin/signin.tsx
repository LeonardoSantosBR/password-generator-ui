import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./signin.style";

export default function Signin() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey! 👋 Entre com sua conta</Text>

      <View style={styles.formArea}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} />
      </View>

      <Text style={styles.textForgot}>Esqueceu sua senha?</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
