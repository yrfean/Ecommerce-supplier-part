import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials) => {
      const response = await axios.post("/auth/login/", credentials);
      return response.data;
    },
    onSuccess: (data) => {
      // You can handle successful login here, like storing the token
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: async (userData) => {
      const response = await api.post("/auth/signup/", userData);
      return response.data;
    },
    onSuccess: (data) => {
      // You can handle successful signup here
      console.log("Signup successful:", data);
    },
    onError: (error) => {
      console.error("Signup error:", error);
    },
  });
}; 