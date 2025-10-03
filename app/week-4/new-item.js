"use client";
import { useState } from "react";

//New item component
export default function NewItem() {

  //State variable called quantity & setter called setQuantity
  const [quantity, setQuantity] = useState(1);

  //Constant to handle max quantity
  const maxQuantity = 20;
  //Constant to handle min quantity
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
  <div className=" max-w-md bg-blue-100 rounded-b lg:rounded ml-5 p-6 border-2 border-blue-300">
    <p className=" text-blue-500 font-bold text-3xl mb-4 ">Quantity: {quantity}</p>
    <div className="flex gap-4 mb-4 my-1 pl">
      {/* Decrement button (-)s
      //Calls decrement function on click and disabled if quantity is 1 */}
      <button
        onClick={decrement}
        disabled={quantity === minQuantity}
        className="bg-blue-500 text-white rounded p-4 border-2 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          Decrement
        </button>
      {/* Increment button (+)
      //Calls increment function on click and disabled if quantity is 20 */}
      <button
        onClick={increment}
        disabled={quantity === maxQuantity}
        className="bg-green-500 text-white rounded p-4 border-2 disabled:bg-green-300 disabled:cursor-not-allowed"
      >
        Increment
      </button>
    </div>
     <p className="text-black italic font-serif">Allowed range: 1 - 20</p>
  </div>

  );


}

