import { View, Text, TextInput, TouchableOpacity } from "react-native";
import SignUp from "../signup/signup";
import { styles } from "./signin.style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSign } from "../../../redux/signSlice.ts/signSlice";
import { useForm, Controller } from "react-hook-form";
import { UsersFormData } from "@/app/types/users/users";
import { useLoginMutation } from "@/app/hooks/users/useLoginMutation";

export default function Signin() {
  const login = useLoginMutation();
  const dispatch = useDispatch();
  const sign = useSelector((state: any) => state.sign.value);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (sign) return <SignUp />;

  async function onSubmit({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      await login({ email, password });
    } catch (error: any) {
      alert("Erro ao entrar" + error);
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
