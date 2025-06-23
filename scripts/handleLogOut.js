import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { router } from "expo-router";

const handleLogout = async () => {
  try {
    await signOut(auth); // wait for auth state to clear
    router.replace("/(authentication)/login"); // now redirect
  } catch (err) {
    console.error("Logout failed:", err);
  }
};

export { handleLogout };