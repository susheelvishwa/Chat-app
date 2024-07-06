import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import app from "../firebase";

const db = getFirestore(app);

// Get a list of cities from your database
async function getUsers() {
  const userCollection = collection(db, "userData");
  const snapshot = await getDocs(userCollection);
  console.log(snapshot.docs.map((doc) => doc.data()));
}

getUsers();
