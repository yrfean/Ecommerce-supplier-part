import { useMutation } from "@tanstack/react-query";
import { tokenLessApi } from "../../axios/axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials) => {
      const response = await tokenLessApi.post("auth/supplier-login/", credentials);
      return response.data;
    },
    
    onSuccess: (data) => {
      // You can handle successful login here, like storing the token
      localStorage.setItem("token", data.token);
      console.log(data);
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: async (userData) => {
      const response = await tokenLessApi.post("company_register/", userData);
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

export const useSendOtp = () => {
  return useMutation({
      mutationFn: async (data) => {
          const response = await tokenLessApi.post("send-otp/", data);
          // console.log(response);
          localStorage.setItem('token', response.data.token)
          return response.data;
      },
      onError: (error) => {
          console.error("Send OTP error:", error);
      },
  });
};

export const useVerifyOtp = () => {
  return useMutation({
      mutationFn: async (data) => {
          const response = await tokenLessApi.post("verify-otp/", data, {
              headers: {
                  Authorization: `${localStorage.getItem('token')}`
              }
          });
          return response.data;
      },
      onSuccess: (data) => {
          localStorage.removeItem('token')
      },
      onError: (error) => {
          console.error("Verify OTP error:", error);
      },
  });
}; 

