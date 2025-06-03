// loginVerify.js
import { db, auth } from "../firebaseConfig.js";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "something else"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

const createFirestoreUser = async (email, password, username) => {
  try {
    if (!email || !password || !username) {
      return "incomplete";
    }
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid; // Get the UID from Firebase Auth

    // Add user data to Firestore using the UID as the document ID
    await setDoc(doc(db, "users", uid), {
      username: username.toLowerCase(),
      email: email, // Store email as a field too
      createdAt: new Date(),
      // ... any other user profile data
    });

    console.log("User created in Auth and Firestore:", uid);
    return { ok: true };
  } catch (error) {
    console.error("Error creating user:", error);
    // Handle specific errors (e.g., email-already-in-use)

    if (error.code === "auth/email-already-in-use") {
      return "used";
    } else if (error.code === "auth/invalid-email") {
      return "invalid";
    } else if (error.code === "auth/weak-password") {
      return "weak";
    }
  }
};

const resetPassword = async (email) => {
  const normalizedEmail = email.toLowerCase();
  const q = query(
    collection(db, "users"),
    where("email", "==", normalizedEmail)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", JSON.stringify(doc.data(), null, 2));
    console.log(doc.data().email === normalizedEmail);
  });

  if (querySnapshot.size === 1) {
    return { ok: true };
  } else {
    return { ok: false };
  }
};

const checkLogin = async (username, password) => {
  try {
    const users = collection(db, "users");
    const q = query(users, where("username", "==", username)); // Case-sensitive by default!
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return {
        code: "auth/username-not-found",
        customData: {},
        name: "FirebaseError",
      };
    }

    const userData = querySnapshot.docs[0].data();
    const emailToLogin = userData.email;

    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailToLogin,
      password
    );
    console.log(
      "User signed in successfully (via username):",
      userCredential.user.uid
    );
    return userCredential;
  } catch (err) {
    return err;
  }
};

const signOutOfApp = () => {
  try {
    signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export { createFirestoreUser, resetPassword, checkLogin, signOutOfApp };
