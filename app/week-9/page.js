"use client";

import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  //Use useUserAuth custom hook to get user object and the login and logout functions
  const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

  //Login function
  async function handleLogin() {
    await gitHubSignIn();
  }

  //Logout function
  async function handleLogout() {
    await firebaseSignOut();
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-300 dark:bg-gray-900 text-blue-900 font-sans p-6">
        {!user && (
        <div>
          <button onClick={handleLogin} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Login with GitHub</button>
        </div>
      )}
     {user && (
        <div className="text-center space-y-11">
          <p className="text-2xl text-black dark:text-white">
            Welcome back, {user.displayName} ({user.email}) 😁
          </p>

          <button onClick={handleLogout} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Logout</button>

          <div>
            <a href="/week-9/shopping-list" className="text-lg text-black underlined dark:text-white hover:text-blue-800 transition-colors">Go to Shopping List</a>
          </div>
        </div>
      )}
    </main>
  );
}


