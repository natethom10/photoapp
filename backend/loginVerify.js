// loginVerify.js
import { db, auth } from "../firebaseConfig.js";
import { doc, setDoc } from "firebase/firestore";

import { createUserWithEmailAndPassword } from "firebase/auth";

// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "something else"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

const createFirestoreUser = async (email, password, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid; // Get the UID from Firebase Auth

    // Add user data to Firestore using the UID as the document ID
    await setDoc(doc(db, "users", uid), {
      username: username,
      email: email, // Store email as a field too
      createdAt: new Date(),
      // ... any other user profile data
    });

    console.log("User created in Auth and Firestore:", uid);
    return uid;
  } catch (error) {
    console.error("Error creating user:", error);
    // Handle specific errors (e.g., email-already-in-use)
  }
};

createFirestoreUser("1@gmail.com", "something", "username");
