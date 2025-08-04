import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Home from "./pages/Home";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {!user ? (
        <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4">
          <h1 className="text-2xl font-bold">Welcome to Scraper App</h1>
          <p className="text-gray-600">Login with Google to continue</p>
          <GoogleLogin
            onSuccess={(res) => setUser(res)}
            onError={() => alert("Login Failed")}
          />
        </div>
      ) : (
        <div className="relative w-full">
          <button
            onClick={handleLogout}
            className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
          <Home />
        </div>
      )}
    </div>
  );
};

export default App;
