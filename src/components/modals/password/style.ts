import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24, 24,24,0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: "80%",
    backgroundColor: "#FFF",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  },
  passwordArea: {
    backgroundColor: "#000000",
    width: "80%",
    padding: 14,
    borderRadius: 6,
  },
  password: {
    color: "#FFF",
    fontSize: 17,
    textAlign: "center",
  },
});
