import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./signin.style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSign } from "../../../redux/signSlice.ts/signSlice";
import SignUp from "../signup/signup";

export default function Signin() {
  const sign = useSelector((state: any) => state.sign.value);
  const dispatch = useDispatch();

  if (sign) return <SignUp />;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋 Entre com sua conta</Text>

      <View style={styles.formArea}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>
      </View>

      <Text onPress={() => dispatch(setSign())} style={styles.newCount}>
        Não possui conta?
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
