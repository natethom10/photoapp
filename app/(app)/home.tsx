import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/app/Header";
import { GroupList } from "@/components/app/GroupList";
import { CreateGroupButton } from "@/components/app/CreateGroupButton";

export default function Home() {
  return (
    <SafeAreaView style={{ padding: 10, flex: 1 }}>
      <Header />
      <CreateGroupButton />
      <GroupList />
    </SafeAreaView>
  );
}
