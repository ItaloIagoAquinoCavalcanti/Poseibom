import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseAuth } from "../../firebase";
import { Alert } from "react-native";


export async function resetPassword(email) {
    let success = false;
    await sendPasswordResetEmail(FirebaseAuth, email)
        .then(() => {
            Alert.alert('Redefinir senha', 'Email para redefinição de senha foi enviado!')
            success = true;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/user-not-found') {
                Alert.alert('Redefinir senha', 'Usuario não encontrado!')
            }
            if (errorCode === 'auth/invalid-email') {
                Alert.alert('Redefinir senha', 'Email invalido!')
            }

            console.log(error)
        });

    return success;
}