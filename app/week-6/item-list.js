"use client";

import Item from "./item";
import { useState } from "react";
import items from "./items.json";


//sort buttons component
function SortButtons({ sortBy, setSortBy }) {
   return (
    <div className="flex justify-center gap-4 my-5">
      <button
        className={
          sortBy === "name"
            ? "bg-blue-500 text-white py-2 px-4 border border-transparent rounded hover:bg-blue-600"
            : "bg-transparent hover:bg-blue-500 text-blue-700 dark:text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        }
        onClick={() => setSortBy("name")}
      >
        Sort by Name
      </button>

      <button
        className={
          sortBy === "category"
            ? "bg-blue-500 text-white py-2 px-4 border border-transparent rounded hover:bg-blue-600"
            : "bg-transparent hover:bg-blue-500 text-blue-700 dark:text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        }
        onClick={() => setSortBy("category")}
      >
        Sort by Category
      </button>
    </div>
  );
}

//item list component
export default function ItemList() {
  //State variable called sortBy & setter called setSortBy
  const [sortBy, setSortBy] = useState("name");

const sortedItems = [...items];

if (sortBy === "name") {
  sortedItems.sort((a, b) => a.name.localeCompare(b.name));
} else if (sortBy === "category") {
  sortedItems.sort((a, b) => a.category.localeCompare(b.category));
}

  
  //Use map to render the items
  const itemList = sortedItems.map((item, index) => (
    <Item
      key={item.id}
      name={item.name}
      quantity={item.quantity}
      category={item.category}
      bgColor={
        index % 2 === 0
          ? "bg-[oklch(44.3%_0.11_240.79)]"
          : "bg-[oklch(29.3%_0.066_243.157)]"
      }
    />
  ));

  //Return the UI
  return (
    <div>
      <SortButtons />
      {itemList}
    </div>
  );
}
