import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#392de9",
    marginBottom: 45,
  },
  newCount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#392de9",
    textDecorationLine: "underline",
    marginBottom: 29,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 23,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "75%",
    height: 30,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    padding: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  error: {
    width: "75%",
    color: "red",
    height: 15,
  },
});
