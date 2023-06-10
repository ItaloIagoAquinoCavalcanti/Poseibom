import { collection, doc, setDoc } from 'firebase/firestore';
import { Firestore } from '../../firebase';

export async function createProfile({ user, name, number }) {
    const userProfile = {
        userId: user.uid,
        name,
        number,
        email: user.email
    }
    const collectionRef = collection(Firestore, 'users')
    await setDoc(doc(collectionRef, user.uid), userProfile)
}