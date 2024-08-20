import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./signup.style";
import { useDispatch } from "react-redux";
import { setSign } from "../../../redux/signSlice.ts/signSlice";

export default function SignUp() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋 Crie sua conta</Text>

      <View style={styles.formArea}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} />
        <TextInput placeholder="Confirmar senha" style={styles.input} />
      </View>

      <Text onPress={() => dispatch(setSign())} style={styles.newCount}>
        Já possui conta?
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}
