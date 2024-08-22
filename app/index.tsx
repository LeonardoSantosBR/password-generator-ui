import Signin from "./pages/auth/signin/signin";
import store from "./redux/store";

import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "@/app/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query/react-query";

function AppContent() {
  const auth = useSelector((state: any) => state.auth.value);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer independent={true}>
        {auth ? <Routes /> : <Signin />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
