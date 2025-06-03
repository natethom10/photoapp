import React, { useEffect, useState } from "react"; // Import useState
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native"; // For loading UI

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

import AuthNavigator from "./assets/components/navigators/AuthNavigator";
import AppNavigator from "./assets/components/navigators/AppNavigator";

export default function App() {
  const [user, setUser] = useState(null); // State to hold the Firebase user object
  const [isLoading, setIsLoading] = useState(true); // State for initial loading

  useEffect(() => {
    console.log("Setting up onAuthStateChanged listener...");
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log(
        "Auth state changed! User:",
        firebaseUser ? firebaseUser.uid : "null (logged out)"
      );
      setUser(firebaseUser); // Update the user state
      setIsLoading(false); // Once auth state is known, stop loading
    });

    // Cleanup subscription on component unmount
    return () => {
      console.log("Cleaning up onAuthStateChanged listener.");
      unsubscribe();
    };
  }, []); // Empty dependency array means it runs once on mount

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Checking authentication status...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        // User is logged in, show main app
        <AppNavigator />
      ) : (
        // User is not logged in, show authentication flow
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
