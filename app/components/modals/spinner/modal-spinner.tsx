import { styles } from "./modal-spinner.style";
import { View, ActivityIndicator } from "react-native";

export function ModalSpinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
