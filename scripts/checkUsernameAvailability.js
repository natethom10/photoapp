import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const checkUsernameAvailability = async (username) => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("username", "==", username.toLowerCase()));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    return {
      success: false,
      code: "username-taken",
      message: "That username is already taken.",
    };
  }

  return {
    success: true,
  };
};

export { checkUsernameAvailability };
