import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useStorage() {
  const getItem = async (key: string) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return passwords;
    } catch (error) {
      console.log("erro ao buscar", error);
      return [];
    }
  };

  const saveItem = async (key: string, value: string) => {
    try {
      const passwords: any = await getItem(key);
      passwords.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log("erro ao salvar", error);
      return [];
    }
  };

  const removeItem = async (key: string, value: string) => {
    try {
      let passwords: any = await getItem(key);
      passwords = passwords.filter((password: any) => password !== value);
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
      return passwords;
    } catch (error) {
      console.log("erro ao remover.", error);
      return [];
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
}
