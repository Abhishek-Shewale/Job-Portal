// import React from "react";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/firebase.config";

// const Login = () => {
//   const auth = getAuth();
//   const googleProvider = new GoogleAuthProvider();
//   const handleLogin = () => {
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   };
//   return (
//     <div className="h-screen w-full flex items-center justify-center">
//       <button className="bg-blue px-8 py-2 text-white" onClick={handleLogin}>
//         Login With Google
//       </button>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config"; // Assuming you have a Firebase config file

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Handle successful login
        console.log("Google Login Successful", result.user);
      })
      .catch((error) => {
        // Handle errors
        console.error("Google Login Error", error);
      });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl mb-4">Login</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-4"
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
