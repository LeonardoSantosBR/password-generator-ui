import axios, { AxiosError } from "axios";
import { API_URL } from "@env";

export async function login(data: { email: string; password: string }) {
  try {
    //...
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw new Error(error);
  }
}

export async function createUser(data: { email: string; password: string }) {
  try {
    const res = await axios.post(`${API_URL}` + `users`, data);
    return res;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw new Error(error);
  }
}
