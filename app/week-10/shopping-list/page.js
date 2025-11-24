"use client";

import ItemList from "./item-list";
import NewItem from "./new-item"; 
import { getItems, addItem } from "../_services/shopping-list-service";
import MealIdeas from "./meal-ideas";
import { useEffect, useState,  } from "react";
import { useUserAuth } from "../../contexts/AuthContext";


//week 10 page
export default function Page() {
  //initialize a state variable items without itemsdata 
  const [items, setItems] = useState([]);

  //State variable for selectedItemName
  const [selectedItemName, setSelectedItemName] = useState("");

  //Create an event handler function (e.g., handleAddItem) that adds a new item to items.
  const handleAddItem = async (item) => {
    //add item to firestore using current user id
    const newId = await addItem(user.uid, item);

    //add id to new item objet
    const newItem = { id: newId, ...item };
    
    setItems((prevItems) => [...prevItems, newItem]);
  };

  //Event handler function to handle item selection clean it up and update the selectedItemName state
  const handleItemSelect = (itemName) => {
    let cleanedName = itemName.trim().toLowerCase();
    cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    console.log("Selected ingredient:", cleanedName);
    setSelectedItemName(cleanedName);
  }

  //use useEffect to call loadItems
  useEffect(() => {
    loadItems();
  }, []);


  //Function to retrieve user
  const { user } = useUserAuth();

  //Redirect if user is not logged in
  if (!user) {
    return null;
  }

  //Load items from Firestore to get the shopping list data
  //async function to load items
  async function loadItems() {
    //call the getItems function to get the shopping list items for current user
    const fetchedItems = await getItems(user.uid);
    //use setItems to update the items state with fetchedItems
    setItems(fetchedItems);
  }

return (
 <main className="flex justify-center items-center min-h-screen space-y-2 text-white flex-col bg-gradient-to-b from-blue-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 p-4">
      <h1 className="my-12 text-3xl font-bold bg-blue-500 dark:bg-[oklch(50%_0.134_242.749)] rounded-bl-lg text-center shadow-md text-white mb-5">
        Week 7 - Shopping List + Meal Ideas
      </h1>

      {/* Pass handleAddItem to NewItem as a prop */}
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
        {/* Left side: New item + item list */}
        <div className="flex-1 space-y-6">
          <NewItem onAddItem={handleAddItem} />
          <div className="lex-1 space-y-3 -ml-15">
            <ItemList items={items} onSelectItem={handleItemSelect} />
          </div>
        </div>
        
        {/* Right side: Meal ideas */}
        <div className="flex-1">
          <h2 className="block mb-2 text-lg font-semibold text-gray-800 dark:text-gray-300">
          {selectedItemName ? `Meal Ideas for "${selectedItemName}"`: "Meal Ideas (select an ingredient)"} </h2>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}