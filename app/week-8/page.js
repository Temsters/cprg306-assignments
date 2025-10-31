"use client";

import ItemList from "./item-list";
import NewItem from "./new-item"; 
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

//week 8 page
export default function Page() {
  //initialize a state variable items with itemsData
  const [items, setItems] = useState(itemsData);

  //State variable for selectedItemName
  const [selectedItemName, setSelectedItemName] = useState("");

  //Create an event handler function (e.g., handleAddItem) that adds a new item to items.
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  //Event handler function to handle item selection clean it up and update the selectedItemName state
  const handleItemSelect = (itemName) => {
    let cleanedName = itemName.trim().toLowerCase();
    cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    console.log("Selected ingredient:", cleanedName);
    setSelectedItemName(cleanedName);
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
          <ItemList items={items} onSelectItem={handleItemSelect} />
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