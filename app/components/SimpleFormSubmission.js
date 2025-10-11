"use client";
import { useState } from "react";

//Create handleSubmit function to handle form submission
export default function SimpleFormSubmission({ onDataSend, quantity }) {

  //State variables
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  //Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

  //Create the Item object 
    const item = {
      name,
      category,
      quantity
    };

    //Display alert with current state of name quantity and category
    alert(
      `Submitted:\n` +
      `Name: ${item.name}\n` +
      `Quantity: ${item.quantity}\n` +
      `Category: ${item.category}`
    );

    //Reset the state variables to their initial values
    setName("");
    setCategory("produce");

    //Log the item object to the console
    console.log("Submitted item:", item);
  }

    return (
      //Create form with onSubmit event handler
      <form className="mb-4 border-2 border-blue-300 p-6 rounded-lg bg-white shadow-sm" onSubmit={handleSubmit}>
 
      {/* Label for item name */}
      <label htmlFor="itemName" className="block mb-2 text-lg font-semibold text-gray-800"> Item Name: </label>

      {/* Input field */}
      <input id="itemName" type="text" placeholder="e.g., milk, 4L🥛" value={name} onChange={(e) => setName(e.target.value)} required 
      className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      

      {/*Category field*/}
      <label htmlFor="category" className="block mb-2 text-lg font-semibold text-gray-800"> Category: </label>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required
      className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
      {/* Submit button */}
      <button type="submit" className="bg-blue-500 text-white rounded p-2 border-2 border-black transform hover:scale-105 transition duration-200 ease-in-out"> Add New Item </button>
      </form>
    );
  }
  


