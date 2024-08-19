import { isAuth } from "@/app/state/atoms";
import { useAtom } from "jotai";

export default function Signin() {
  const [, setIsAuthenticated] = useAtom(isAuth);

  return (<></>);
}
