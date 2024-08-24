import axios from "axios";
import { API_HOST } from "@env";

export async function login(data: { email: string; password: string }) {
  try {
    const res = await axios.post(`${API_HOST}` + `signin`, data);
    return res;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw new Error(error);
  }
}

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const res = await axios.post(`${API_HOST}` + `users`, data);
    return res;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw new Error(error);
  }
}
