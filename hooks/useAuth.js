import { useEffect, useState } from "react"
import { signin } from "../firebase-helpers/auth/singin";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase";
import { signout } from "../firebase-helpers/auth/signout";
import { signup } from "../firebase-helpers/auth/signup";
import { Alert } from "react-native";

export function useAuth() {
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    async function handleSignIn(email, senha) {
        if (email === "" || senha === "") {
            Alert.alert("Por favor, preencha todos os campos.");
            return;
        }

        const user = await signin(email, senha);

        if (user) {
            setUser(user);
            setIsAuth(true);
        }
    }

    async function handleSignUp({ email, password, name, number }) {
        const signUpUser = await signup({ email, password, name, number })

        if (signUpUser?.uid) {
            setUser(signUpUser)
            setIsAuth(true)
        }
    }

    async function handleSignOut() {
        const sucess = await signout();
        if (sucess) {
            setIsAuth(false)
            setUser(null)
        }
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(FirebaseAuth, (userState) => {
            if (userState) {
                setUser(userState)
                setIsAuth(true)
            } else {
                setUser(null)
                setIsAuth(false)
            }
        });

        return () => subscriber()
    }, [])


    return {
        handleSignIn,
        user,
        isAuth,
        handleSignIn,
        handleSignUp,
        handleSignOut
    }
}