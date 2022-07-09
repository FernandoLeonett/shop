import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { firebaseCollections } from "./helper/firebase_collections";
import db from "./firebaseConfig";
const { ordenes, discos } = firebaseCollections;

export const getItems = async () => {
  const discsSnapshot = await getDocs(collection(db, discos));
  const discList = discsSnapshot.docs.map((d) => {
    let disc = d.data();
    disc.id = d.id;

    return disc;
  });
  return discList;
};

export const getItem = async (id) => {
  const docRef = doc(db, discos, id);
  const docSnaptshop = await getDoc(docRef);
  let disc = docSnaptshop.data();
  disc.id = docSnaptshop.id;
  return disc;
};

export async function saveData(order) {
  const orderRef = collection(db, ordenes);
  const res = await addDoc(orderRef, order);
  return res;
}
