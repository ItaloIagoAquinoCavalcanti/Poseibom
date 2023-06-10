import { signInWithEmailAndPassword } from "firebase/auth"
import { Alert } from "react-native";
import { FirebaseAuth } from "../../firebase";


export async function signin(email, password) {
    const user = await signInWithEmailAndPassword(FirebaseAuth, email, password).catch(err => {
        Alert.alert('Não foi possivel entrar')
        if (err.code === 'auth/too-many-requests') {
            Alert.alert('Muitas tentativas de login', ' Conta desabilitada temporariamente');
        }

        console.log(err)
    });

    if (user?.user) {
        return user.user
    }
}