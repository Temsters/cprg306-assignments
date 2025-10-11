"use client";
import SimpleFormSubmission from "../components/SimpleFormSubmission";
import { useState } from "react";

//New item component
export default function NewItem() {

  //State variable called quantity & setter called setQuantity
  const [quantity, setQuantity] = useState(1);

  //State variable to handle form data
  const [formData, setFormData] = useState("");
  function handleData(data) {
    setFormData(data);
  }

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

  return (
    
  <div className=" max-w-md bg-blue-100 rounded-b lg:rounded ml-5 p-6 pt-6 border-2 border-blue-300">

      {/* Form component */}
      <SimpleFormSubmission onDataSend={handleData} quantity={quantity} />

    {/* Quantity Section */}
    <p className="text-xl mb-4"> Quantity(1-20) </p>
    <h2 className="text-xl mb-4 ">Current: {quantity}</h2>
    <div className="flex gap-4 mb-4 my-1 pl">
      {/* Decrement button (-)s
      //Calls decrement functiblackson on click and disabled if quantity is 1 */}
      <button
        onClick={decrement}
        disabled={quantity === minQuantity}
        className="bg-blue-500 text-black white rounded p-4 border-2 border-black disabled:bg-blue-300 disabled:cursor-not-allowed transform hover:scale-105 transition duration-200 ease-in-out"
        >
          Decrement
        </button>
      {/* Increment button (+)
      //Calls increment function on click and disabled if quantity is 20 */}
      <button
        onClick={increment}
        disabled={quantity === maxQuantity}
        className="bg-green-500 text-black white rounded p-4 border-2 border-black disabled:bg-green-300 disabled:cursor-not-allowed transform hover:scale-105 transition duration-200 ease-in-out"
      >
        Increment
      </button>
    </div>
     <p className="text-black italic font-serif">Allowed range: 1 - 20</p>
  </div>

  );


}

