// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    collection,
    addDoc,
    getFirestore,
    query,
    where,
    getDocs,
    doc,
    setDoc,
    updateDoc,
} from "firebase/firestore";

import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";

// ! setup data in env

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


//? completed functions
// user
const loginWithEmailAndPassword = ({
    email,
    password,
}) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const signUpWithEmailAndPassword = ({
    email,
    password,
}) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

async function signOut() {
    try {
        console.log("Signing out...");
        return auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}

const addUserToDb = async ({ name, uid, authProvider, email }) => {
    await addDoc(collection(db, "users"), {
        uid: uid,
        name: name,
        authProvider: authProvider,
        email: email,
    });
};

const getUserData = async () => {
    const q = query(collection(db, "users"), where("uid", "==", userUid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();

    return data;
};

const updateCurrentLanguage = async (
    { languageId, name }
) => {
    const currentLanguageRef = doc(db, "current_language", "current");
    const data = {
        "languageId": languageId, "name": name
    }
    updateDoc(currentLanguageRef, data)
        .then(docRef => {
            console.log("A New Document Field has been added to an existing document");
        })
        .catch(error => {
            console.log(error);
        })
    // try {
    //     await updateDoc(currentLanguageRef, data);
    //     console.log("Update Document written successful");
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }
};


export {
    db,
    addUserToDb,
    getUserData,
    signUpWithEmailAndPassword,
    loginWithEmailAndPassword,
    updateCurrentLanguage,
    signOut,
};