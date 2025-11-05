import { useUserAuth } from "../contexts/AuthContext";

//Use useUserAuth custom hook to get user object and the login and logout functions
const {user, signInWithPopUp, signOut} = useUserAuth();

//S
