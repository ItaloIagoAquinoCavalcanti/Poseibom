import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

const initial = {
    handleSignIn: async (email = '', senha = '') => { },
    handleSignOut: async () => { },
    handleSignUp: async ({ email = '', password = '', name = '', number = '' }) => { },
    isAuth: false,
    user: {},
}

export const AuthContext = createContext(initial);

export function AuthProvider({ children }) {
    const { handleSignIn, handleSignOut, handleSignUp, isAuth, user } = useAuth();
    return (
        <AuthContext.Provider value={{ handleSignIn, handleSignOut, handleSignUp, isAuth, user }}>
            {children}
        </AuthContext.Provider>
    )
}