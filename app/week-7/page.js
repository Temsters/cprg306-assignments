"use client";

import ItemList from "./item-list";
import NewItem from "./new-item"; 
import itemsData from "./items.json";
import { useState } from "react";

//week 7 page
export default function Page() {
  //initialize a state variable items with itemsData
  const [items, setItems] = useState(itemsData);

  //Create an event handler function (e.g., handleAddItem) that adds a new item to items.
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

return (
 <main className="flex justify-center items-center min-h-screen space-y-2 text-white flex-col bg-gradient-to-b from-blue-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 p-4">
      <h1 className="my-12 text-3xl font-bold bg-blue-500 dark:bg-[oklch(50%_0.134_242.749)] rounded-bl-lg text-center shadow-md text-white mb-5">
        Week 7 - Shopping List
      </h1>

      {/* Pass handleAddItem to NewItem as a prop */}
      <NewItem onAddItem={handleAddItem} />

      {/* Display the list of items */}
      <ItemList items={items} />
    </main>
  );
}