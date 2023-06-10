import { signOut } from 'firebase/auth';
import { FirebaseAuth } from '../../firebase'

export async function signout() {
    let success = false;
    await signOut(FirebaseAuth).then(() => success = true);
    return success;
} 