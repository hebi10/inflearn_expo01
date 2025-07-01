import { initializeKakaoSDK } from "@react-native-kakao/core";
import { login as kakaoLogin } from "@react-native-kakao/user";
import { Redirect, router } from "expo-router";
import { useContext, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "./_layout";

export default function Login() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const { user, login } = useContext(AuthContext);
  const isLoggedIn = !!user;

  useEffect(() => {
    initializeKakaoSDK("80cda0767e7121a856ec8e822a35924e");
  }, []);

  const onKakaoLogin = () => {
    kakaoLogin();
  }

  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: insets.top,
        backgroundColor: colorScheme === "dark" ? "black" : "white",
      }}
    >
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
      <Pressable style={styles.loginButton} onPress={login}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
      <Pressable style={styles.kakaoLoginButton} onPress={onKakaoLogin}>
        <Text style={styles.kakaoLoginButtonText}>Kakao Login</Text>
      </Pressable>
      <Pressable style={styles.appleLoginButton} onPress={login}>
        <Text style={styles.loginButtonText}>Apple Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
  kakaoLoginButton: {
    backgroundColor: "#FEE500",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
  appleLoginButton: {
    backgroundColor: "black",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
  },
  kakaoLoginButtonText: {
    color: "black",
  },
});
