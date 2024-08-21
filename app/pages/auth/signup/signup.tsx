import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./signup.style";
import { useDispatch } from "react-redux";
import { setSign } from "../../../redux/signSlice.ts/signSlice";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/app/services/users";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { mutateAsync: createUserFn } = useMutation({
    mutationFn: createUser,
  });

  const data = {
    email: email,
    password: password,
  };

  async function handleSignUpUser(data: { email: string; password: string }) {
    try {
      await createUserFn({
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      alert("Erro ao criar conta" + error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋 Crie sua conta</Text>

      <View style={styles.formArea}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          placeholder="Confirmar senha"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>

      <Text onPress={() => dispatch(setSign())} style={styles.newCount}>
        Já possui conta?
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => handleSignUpUser(data)}>
          Criar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
