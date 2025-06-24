// Login.jsx
import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function Login({ setUser }) {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User:", user);
      setUser(user); // Store user in state or context
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
