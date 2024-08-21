import axios from "axios";
import { API_URL } from "@env";

export async function createUser(data: { email: string; password: string }) {
  try {
    const res = await axios.post(`${API_URL}` + `users`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
}
