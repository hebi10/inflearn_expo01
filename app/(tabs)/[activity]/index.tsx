import NotFound from "@/app/+not-found";
import { usePathname, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Activity() {
  const router = useRouter();
  const pathname = usePathname();

  if (["/activity", "/activity/follows", "/activity/mentions", "/activity/mentions", "/activity/quotes", "/activity/reposts", "/activity/verified"].includes(pathname)) {
    return <NotFound />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/activity.tsx to edit this screen.</Text>
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity`)}>
          <Text>All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity/follows`)}>
          <Text>Follows</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity/mentions`)}>
          <Text>Mentions</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity/quotes`)}>
          <Text>Quotes</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity/reposts`)}>
          <Text>Reposts</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity/verified`)}>
          <Text>Verified</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
