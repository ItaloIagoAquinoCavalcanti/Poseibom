import { collection, doc, getDoc } from "firebase/firestore"
import { Firestore } from "../../firebase";

export async function getProfile(userId) {
    const profile = await getDoc(doc(collection(Firestore, 'users'), userId)).catch(err => {
        console.log(err);
    })
    return profile.data();
}