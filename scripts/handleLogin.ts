import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const loginWithIdentifier = async (identifier: string, password: string) => {
  let emailToUse = identifier;

  // If it's not an email, treat it as a username
  if (!identifier.includes("@")) {
    const q = query(
      collection(db, "users"),
      where("username", "==", identifier.toLowerCase())
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return {
        success: false,
        code: "user-not-found",
        message: "Username not found.",
      };
    }

    emailToUse = snapshot.docs[0].data().email;
  }

  try {
    await signInWithEmailAndPassword(auth, emailToUse, password);
    return { success: true };
  } catch (error) {
    if (error instanceof Error && "code" in error) {
      return {
        success: false,
        code: (error as any).code,
        message: "Login failed. Check credentials.",
      };
    }

    return {
      success: false,
      code: "unknown",
      message: "An unexpected error occurred.",
    };
  }
};

export { loginWithIdentifier };
