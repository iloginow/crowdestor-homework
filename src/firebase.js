import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  doc,
  runTransaction,
  collection,
  getDocs,
} from 'firebase/firestore';

import firebaseConfig from '../firebase.config';

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore();

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

export async function saveUserToFirestore(user) {
  const userDocRef = doc(db, 'users', user.uid);

  const result = await runTransaction(db, async (transaction) => {
    const userDoc = await transaction.get(userDocRef);

    if (userDoc.exists()) return userDoc.data();

    const docData = {
      email: user.email,
      name: user.displayName,
      phone: user.phoneNumber,
      photoUrl: user.photoURL,
      address: null,
    };

    transaction.set(userDocRef, docData);

    return docData;
  });

  return result;
}

export async function getUserList() {
  const userList = [];
  const querySnapshot = await getDocs(collection(db, 'users'));

  querySnapshot.forEach((userDoc) => {
    const data = userDoc.data();
    const { id } = userDoc;

    userList.push({ ...data, id });
  });

  return userList;
}

export async function updateUser(user) {
  const userDocRef = doc(db, 'users', user.id);

  await runTransaction(db, async (transaction) => {
    const userDoc = await transaction.get(userDocRef);

    if (!userDoc.exists()) {
      throw new Error('User does not exitst');
    }

    const docData = {
      name: user.name,
      phone: user.phone,
      photoUrl: user.photoUrl,
      address: user.address,
    };

    transaction.update(userDocRef, docData);
  });
}
