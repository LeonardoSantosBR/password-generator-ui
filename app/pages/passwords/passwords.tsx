import useStorage from "@/app/hooks/useStorage";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./passwords.styles";

export function Passwords() {
  const [passwordList, SetPasswordList] = useState<String[]>([]);
  const isFocused = useIsFocused();
  const { getItem } = useStorage();

  useEffect(() => {
    async function loadPasswordList() {
      const passwordStorage: any = await getItem("@pass");
      SetPasswordList(passwordStorage);
    }

    loadPasswordList();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={passwordList}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
