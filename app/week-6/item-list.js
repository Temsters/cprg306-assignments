import Item from "./item";
import { useState } from "react";
import items from "./items.json";

//item list component
export default function ItemList() {

//State variable called sortBy & setter called setSortBy
const [sortBy, setSortBy] = useState("name");

//Sort the items using state variable sortBy
// if sortBy is "name", sort alphabetically by name
if (sortBy === "name") {
  items.sort((a, b) => a.name.localeCompare(b.name));
}
// if sortBy is "category", sort alphabetically by category
else if (sortBy === "category") {
  items.sort((a, b) => a.category.localeCompare(b.category));
}
};

//Create sort buttons for name and category
export function SortButtons() {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setSortBy("name")}
      >
        Sort by Name
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => setSortBy("category")}
      >
        Sort by Category
      </button>
    </div>
  );
}

//Use map to render the items
const itemList = items.map((item, index) => (
  <Item 
    key={item.id}
    name={item.name}
    quantity={item.quantity}
    category={item.category}
    bgColor={index % 2 === 0 ? "bg-[oklch(44.3%_0.11_240.79)]" : "bg-[oklch(29.3%_0.066_243.157)]"}
  />
));

//Return the UI
return (
  <div>
    <SortButtons />
    {itemList}
  </div>
);




