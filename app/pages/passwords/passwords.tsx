import useStorage from "@/app/hooks/useStorage";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./passwords.style";
import { PasswordItem } from "./components/passwordItem";

export function Passwords() {
  const { getItem, removeItem } = useStorage();
  const [passwordList, SetPasswordList] = useState<String[]>([]);
  const isFocused = useIsFocused();

  async function handleRemoveItem(item: String) {
    const passwords = await removeItem("@pass", item);
    SetPasswordList(passwords);
  }

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
          style={styles.flatList}
          data={passwordList}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem
              password={item}
              removePassword={() => handleRemoveItem(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
