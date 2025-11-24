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
         <div className="border-2 border-blue-600 rounded-lg p-8 flex flex-col items-center space-y-6 bg-white dark:bg-[#1c1f23]">
      <img
        src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
        alt="GitHub Logo"
        className="w-16 h-16"
      />
      <button
        onClick={handleLogin}
        className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Login with GitHub
      </button>
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
            <a href="/week-10/shopping-list" className="text-lg text-black underlined dark:text-white hover:text-blue-800 transition-colors">Go to Shopping List</a>
          </div>
        </div>
      )}
    </main>
  );
}


