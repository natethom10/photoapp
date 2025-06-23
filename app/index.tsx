import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export default function Index() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);
    });
    return unsubscribe;
  }, []);

  if (checking) return null;

  return user ? (
    <Redirect href="/(app)/home" />
  ) : (
    <Redirect href="/(authentication)/login" />
  );
}
