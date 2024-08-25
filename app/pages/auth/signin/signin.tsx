import SignUp from "../signup/signup";
import Toast from "react-native-toast-message";
import useStorage from "@/app/storage/useStorage";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./signin.style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSign } from "../../../redux/signSlice.ts/signSlice";
import { setAuth } from "@/app/redux/authSlice/authSlice";
import { useForm, Controller } from "react-hook-form";
import { UsersFormData } from "@/app/types/users/users";
import { useLoginMutation } from "@/app/hooks/users/useLoginMutation";
import { ModalSpinner } from "@/app/components/modals/spinner/modal-spinner";

export default function Signin() {
  const { setToken } = useStorage();
  const { loginFn, isPending } = useLoginMutation();

  //redux
  const sign = useSelector((state: any) => state.sign.value);

  //change global state
  const dispatch = useDispatch();

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
      const res = await loginFn({ email, password });
      const token = res.data.accessToken
      await setToken(token);
      dispatch(setAuth(token));

      Toast.show({
        type: "success",
        text1: "Login efetuado com sucesso.",
      });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Erro ao entrar",
        text2: error.message,
      });
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

      {isPending && <ModalSpinner />}
      <Toast />
    </View>
  );
}
