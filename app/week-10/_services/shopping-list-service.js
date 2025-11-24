//import database 
import { db } from "../../utils/firebase";
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
    //Fetches the documents from the items subcollection and for each document adds an object to the items array containing the document id and data
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    return [];
  }
}

//Add the addItem async function
export async function addItem(userId, item) {
  try {
    //Uses userId to reference the items subcollection under the user's document in the 'users' collection
    const itemsCollectionRef = collection(db, 'users', userId, 'items');
    //Adds the item to this subcollection
    const docRef = await addDoc(itemsCollectionRef, item);
    //Returns id of the newly added document and item data.
    return { id: docRef.id, ...item };
  } catch (error) {
    console.error("Error adding item: ", error);
    return null;
  }
}