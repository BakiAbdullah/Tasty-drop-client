import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut, useAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = useAuth(app);

// export const createUser = createAsyncThunk(
//   "user/createUser",
//   async ({ name, email, password }) => {
//     const data = await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(auth.currentUser, {
//       displayName: name,
//     });
//     console.log(data);
//     return {
//       name: data.user.displayName,
//       email: data.user.email,
//     };
//   }
// );
