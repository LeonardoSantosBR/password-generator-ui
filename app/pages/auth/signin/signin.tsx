import { View, Text, TextInput, TouchableOpacity } from "react-native";
import SignUp from "../signup/signup";
import { styles } from "./signin.style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSign } from "../../../redux/signSlice.ts/signSlice";
import { useForm, Controller } from "react-hook-form";
import { UsersFormData } from "@/app/types/users/users";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/app/services/users";

export default function Signin() {
  const dispatch = useDispatch();
  const sign = useSelector((state: any) => state.sign.value);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersFormData>();

  const { mutateAsync: loginFn } = useMutation({
    mutationFn: login,
  });

  if (sign) return <SignUp />;

  async function onSubmit(data: UsersFormData) {
    try {
      await loginFn({
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      alert("Erro ao criar conta" + error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋 Entre com sua conta</Text>

      <Controller
        control={control}
        name="email"
        rules={{ required: "Email obrigatório." }}
        render={({ field: { value, onChange } }) => {
          return (
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email"
                value={value}
                onChange={onChange}
                style={styles.input}
                autoCapitalize="none"
              />
              {errors.email ? (
                <Text style={styles.error}>{errors.email?.message}</Text>
              ) : null}
            </View>
          );
        }}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: "Senha obrigatória." }}
        render={({ field: { value, onChange } }) => {
          return (
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Senha"
                value={value}
                onChange={onChange}
                style={styles.input}
                secureTextEntry={true}
              />
              {errors.password ? (
                <Text style={styles.error}>{errors.password?.message}</Text>
              ) : null}
            </View>
          );
        }}
      />

      <Text onPress={() => dispatch(setSign())} style={styles.newCount}>
        Não possui conta?
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
