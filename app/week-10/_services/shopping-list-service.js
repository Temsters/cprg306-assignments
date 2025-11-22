//import database 
import { db } from "../utils/firebase";
//import firestore functions
import { collection, getDocs, addDoc, query } from "firebase/firestore";


// Add the getItems async function
//Takes userId as parameter
export async function getItems(userId) { 
  try {
    //Query a subcollection 'items' under the document with id userId in the 'users' collection
    const itemsQuery = query(collection(db, 'users', userId, 'items'));
    const querySnapshot =  await getDocs(itemsQuery);
    const items = [];
    //Fetches the documents from the items subcollection and for each document adds an object to the items array 
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    //Returns the items array
    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    return [];
  }
}

//test