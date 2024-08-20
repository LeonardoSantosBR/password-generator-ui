import Signin from "./pages/auth/signin/signin";
import store from "./redux/store";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "@/app/routes";

function AppContent() {
  const auth = useSelector((state: any) => state.auth.value);

  return (
    <NavigationContainer independent={true}>
      {auth ? <Routes /> : <Signin />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
