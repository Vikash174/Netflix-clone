import React, { useState } from "react";
import "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import { auth } from "../../utils/firebase";

const GuestLogin = () => {
  const [loading, setLoading] = useState(false);

  const handleGuestLogin = async () => {
    setLoading(true);
    signInAnonymously(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <button
          onClick={handleGuestLogin}
          className={`w-full bg-blue-500 text-white py-2 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login as Guest"}
        </button>
      </div>
    </div>
  );
};

export default GuestLogin;
