import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { styles } from "./passwordItem.style";
import { Pressable, Text, View } from "react-native";

export function PasswordItem({
  password,
  removePassword,
}: {
  password: String;
  removePassword: any;
}) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  
  const maskedPassword = password
    .split("")
    .map(() => "•")
    .join("");

  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <View style={[!passwordVisible && styles.areaBlocked]}>
        <Text style={[styles.text, !passwordVisible && styles.textBlocked]}>
          {passwordVisible ? password : maskedPassword}
        </Text>
      </View>

      <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
        {passwordVisible ? (
          <AntDesign name="eye" size={24} color="white" />
        ) : (
          <Entypo name="eye-with-line" size={24} color="white" />
        )}
      </Pressable>
    </Pressable>
  );
}
