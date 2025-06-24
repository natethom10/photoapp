import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const resetPassword = (email) => {
  console.log(email.toLowerCase());
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Email sent.");
    })
    .catch((error) => {
      console.dir(error);
    });
};
