import { Redirect, useRouter } from "expo-router";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "./_layout";

export default function Login() {
  const { user, login } = useContext(AuthContext);
  const isLoggedIn = !!user;
  const insets = useSafeAreaInsets();
  const router = useRouter();

  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <View
      style={{
        paddingTop: insets.top, 
      }}
    >
      <View>
        <Pressable onPress={() => router.replace("/home")}>
          <Text>Go Back</Text>
        </Pressable>
      </View>
      <View>
        <Pressable style={styles.loginButton} onPress={login}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 100,
  },
  loginButtonText: {
    color: "#fff",
  },
});