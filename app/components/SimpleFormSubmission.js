"use client";
import { useState } from "react";



//Create handleSubmit function to handle form submission
export default function SimpleFormSubmission({onAddItem}) {

  //State variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

   //Quantity limits
  const maxQuantity = 20;
  const minQuantity = 1;

   //Increment function to increase quantity by 1 with a max of 20
  const increment = () => {
    setQuantity(Math.min(quantity + 1, maxQuantity));
  }

  //Decrement function to decrease quantity by 1, with a min of 1
  const decrement = () => {
    setQuantity(Math.max(quantity - 1, minQuantity));
  }

  //Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    
  //Generate a random id
  const id = crypto.randomUUID();

  //Create the Item object 
  const item = { id, name, category, quantity };
  onAddItem(item);

  
  //Log the item object to the console
  console.log("Your new item:", item);

  //Reset the state variables to their initial values
  setName("");
  setCategory("produce");
  setQuantity(1);
};

    return (
      //Align form centered
        <form className="mb-4 border-2 border-blue-300 p-6 rounded-lg bg-blue-400 dark:bg-gray-900 dark:border-gray-700 shadow-sm" onSubmit={handleSubmit}>
          {/* Label for item name */}
          <label htmlFor="itemName" className="block mb-2 text-lg font-semibold text-gray-800  dark:text-gray-300"> Item Name: </label>

      {/* Input field */}
      <input id="itemName" type="text" placeholder="e.g., milk, 4L🥛" value={name} onChange={(e) => setName(e.target.value)} required 
      className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      
       {/* Quantity Section */}
      <p className="block mb-2 text-sm font-semibold italic text-gray-800  dark:text-gray-300"> Quantity (1-20) </p>
      <h2 className="block mb-2 text-lg font-semibold text-gray-800  dark:text-gray-300">Current: {quantity}</h2>
      <div className="flex gap-4 mb-4 my-1 pl">
      {/* Decrement button (-)s
      //Calls decrement functiblackson on click and disabled if quantity is 1 */}
      <button
        onClick={decrement}
        type="button"
        disabled={quantity === minQuantity}
        className="bg-blue-200 text-black white rounded-2xl p-4 border-2 border-black  disabled:bg-blue-300 disabled:cursor-not-allowed transform hover:scale-105 transition duration-200 ease-in-out"
      >
        Decrement
      </button>
      {/* Increment button (+)
      //Calls increment function on click and disabled if quantity is 20 */}
      <button
        onClick={increment}
        type="button"
        disabled={quantity === maxQuantity}
        className="bg-blue-200 dark:bg-blue-500 text-black white rounded-2xl p-4 border-2 border-black   disabled:bg-green-300 disabled:cursor-not-allowed transform hover:scale-105 transition duration-200 ease-in-out"
      >
        Increment
      </button>
      <br/>
       <p className="block mb-2 text-xs pt-3  text-center font-semibold italic text-gray-800  dark:text-gray-300">Allowed Range (1-20) </p>
    </div>

      {/*Category field*/}
      <label htmlFor="category" className="block mb-2 text-lg font-semibold text-gray-800 dark:text-gray-300"> Category: </label>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required
      className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-200 text-white">
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
      <div className="flex justify-center">
        <button type="submit" className="bg-blue-200  dark:bg-blue-500  text-black dark:text-black rounded-2xl p-2 border-2 border-black transform hover:scale-105 transition duration-200 ease-in-out">Add New Item </button>
      </div>      
      </form>
    );
  }
  
  


