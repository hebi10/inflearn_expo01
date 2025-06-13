import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
  StyleSheet,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "../../_layout";

export default function Index() {
  const router = useRouter();
  const { username } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!user;

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuButton: {
    position: "absolute",
    left: 20,
    top: 10,
  },
  profile: {},
  profileHeader: {},
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});