import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./signup.style";
import { useDispatch } from "react-redux";
import { setSign } from "../../../redux/signSlice.ts/signSlice";
import { UsersFormData } from "@/app/types/users/users";
import { useUsersMutation } from "@/app/hooks/users/useUsersMutation";

export default function SignUp() {
  const createUserFn = useUsersMutation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersFormData>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await createUserFn({ email, password });
    } catch (error: any) {
      alert("Erro ao criar conta: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋 Crie sua conta</Text>

      <Controller
        control={control}
        name="email"
        rules={{ required: "Email obrigatório." }}
        render={({ field: { value, onChange } }) => {
          return (
            <View style={styles.inputContainer}>
              <TextInput
                value={value}
                placeholder="Email"
                style={styles.input}
                onChangeText={onChange}
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
                value={value}
                placeholder="Senha"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={onChange}
                autoCapitalize="none"
              />
              {errors.password ? (
                <Text style={styles.error}>{errors.password?.message}</Text>
              ) : null}
            </View>
          );
        }}
      />

      <Controller
        control={control}
        name="confirmPassword"
        rules={{ required: "Necessário confirmar a senha." }}
        render={({ field: { value, onChange } }) => {
          return (
            <View style={styles.inputContainer}>
              <TextInput
                value={value}
                placeholder="Confirmar senha"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={onChange}
                autoCapitalize="none"
              />
              {errors.confirmPassword ? (
                <Text style={styles.error}>
                  {errors.confirmPassword?.message}
                </Text>
              ) : null}
            </View>
          );
        }}
      />

      <Text onPress={() => dispatch(setSign())} style={styles.newCount}>
        Já possui conta?
      </Text>

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}
