import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { createContext, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext<{
  user?: Object | null;
  login?: () => Promise<void>;
  logout?: () => Promise<void>;
}>({});

export default function RootLayout() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = () => {
    console.log("Login button pressed");
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "zerocho",
        password: "1234",
      }),
    })
    .then((res) => {
      console.log("Response status:", res.status);
      if (res.status >= 400) {
        Alert.alert("Login failed", "통신 오류가 발생했습니다.");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Login successful:", data);
      setUser(data.user);
      return Promise.all([
        SecureStore.setItemAsync("accessToken", data.accessToken),
        SecureStore.setItemAsync("refreshToken", data.refreshToken),
        AsyncStorage.setItem("user", JSON.stringify(data.user)),
      ]);
    })
    .then(() => {
      router.push("/(tabs)");
    })
    .catch((error) => {
      console.error("Login failed:", error);
    });
  };

  const logout = () => {
    setUser(null);
    return Promise.all([
      SecureStore.deleteItemAsync("accessToken"),
      SecureStore.deleteItemAsync("refreshToken"),
      AsyncStorage.removeItem("user"),
    ]);
  };

  return (
    <AuthContext value = {{user, login, logout}}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="modal" options={{presentation: "modal"}} />
      </Stack>
    </AuthContext>
  );
}
