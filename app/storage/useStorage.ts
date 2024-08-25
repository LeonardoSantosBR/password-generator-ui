import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useStorage() {
  const setToken = async (accessToken: string) => {
    try {
      await AsyncStorage.setItem("@token", accessToken);
    } catch (error) {
      return error;
    }
  };

  return {
    setToken,
  };
}
