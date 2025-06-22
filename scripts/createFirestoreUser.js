import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { db, auth } from "../firebaseConfig";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { checkUsernameAvailability } from "./checkUsernameAvailability";

const createFirestoreUser = async (email, password, username) => {
  try {
    if (!email || !password || !username) {
      return {
        success: false,
        code: "missing-fields",
        message: "Email, password, and username are required.",
      };
    }

    const checkUsername = await checkUsernameAvailability(username);

    if (!checkUsername.success) {
      return checkUsername;
    } else if (username.length < 4) {
      console.log("Short username");
      return {
        success: false,
        code: "weak-username",
        message: "Username is too short.",
      };
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCredential.user.uid;

    await setDoc(doc(db, "users", uid), {
      username: username.toLowerCase(),
      email,
      createdAt: new Date(),
      memberOf: [],
      ownedGroups: [],
    });

    return {
      success: true,
      uid,
      message: "User created successfully.",
    };
  } catch (error) {
    console.error("Error creating user:", error);

    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          success: false,
          code: error.code,
          message: "The email address is already in use.",
        };
      case "auth/invalid-email":
        return {
          success: false,
          code: error.code,
          message: "The email address is not valid.",
        };
      case "auth/weak-password":
        return {
          success: false,
          code: error.code,
          message: "The password is too weak.",
        };
      default:
        return {
          success: false,
          code: "unknown-error",
          message: "An unexpected error occurred.",
        };
    }
  }
};

export { createFirestoreUser };
