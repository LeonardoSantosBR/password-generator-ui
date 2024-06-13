import { styles } from "./passwordItem.style";
import { Pressable, Text } from "react-native";

export function PasswordItem({
  password,
  removePassword,
}: {
  password: String;
  removePassword: any;
}) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{password}</Text>
    </Pressable>
  );
}
