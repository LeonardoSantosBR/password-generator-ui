import { useAtom } from "jotai";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "@/app/routes";
import { isAuth } from "./state/atoms";

import Signin from "./pages/auth/signin/signin";

export default function App() {
  const [isAuthenticated] = useAtom(isAuth);

  return (
    <NavigationContainer independent={true}>
      {isAuthenticated ? <Routes /> : <Signin />}
    </NavigationContainer>
  );
}
