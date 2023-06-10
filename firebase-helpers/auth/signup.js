import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from '../../firebase'
import { createProfile } from '../profile/createProfile'
import { Alert } from "react-native";

export async function signup({ email, password, name, number }) {

    const user = await createUserWithEmailAndPassword(FirebaseAuth, email, password).catch(err => {
        if (err.code === 'auth/email-already-in-use') {
            Alert.alert('Email já está em uso');
        }
        if (err.code === 'auth/invalid-email') {
            Alert.alert('Email invalido');
        }
        if (err.code === 'auth/operation-not-allowed') {
            Alert.alert('Cadastro falhou');
        }
        if (err.code === 'auth/weak-password') {
            Alert.alert('senha deve conter 6 digitos ou mais');
        }
    })

    if (user?.user) {
        await createProfile({ user: user.user, name, number });

        return user.user;
    }

}