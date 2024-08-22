import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./signup.style";
import { useDispatch } from "react-redux";
import { setSign } from "../../../redux/signSlice.ts/signSlice";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/app/services/users";
import { UsersFormData } from "@/app/types/users/users";

export default function SignUp() {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersFormData>();

  const { mutateAsync: createUserFn } = useMutation({
    mutationFn: createUser,
  });

  async function onSubmit(data: UsersFormData) {
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

      <Controller
        control={control}
        name="email"
        rules={{ required: "Email obrigatório." }}
        render={({ field: { value, onChange } }) => {
          return (
            <>
              <TextInput
                value={value}
                placeholder="Email"
                style={styles.input}
                onChangeText={onChange}
                autoCapitalize="none"
              />
            </>
          );
        }}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: "Senha obrigatória." }}
        render={({ field: { value, onChange } }) => {
          return (
            <>
              <TextInput
                value={value}
                placeholder="Senha"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={onChange}
                autoCapitalize="none"
              />
            </>
          );
        }}
      />

      <Controller
        control={control}
        name="confirmPassword"
        rules={{ required: "Necessário confirmar a senha." }}
        render={({ field: { value, onChange } }) => {
          return (
            <>
              <TextInput
                value={value}
                placeholder="Confirmar senha"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={onChange}
                autoCapitalize="none"
              />
            </>
          );
        }}
      />

      <Text onPress={() => dispatch(setSign())} style={styles.newCount}>
        Já possui conta?
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>
          Criar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
