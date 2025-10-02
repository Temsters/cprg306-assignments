"use client";
import { useState } from "react";

//New item component
export default function NewItem() {

  //State variable called quantity & setter called setQuantity
  const [quantity, setQuantity] = useState(1);

  //State variable to handle max quantity
  const maxQuantity = 20;
  //State variable to handle min quantity
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
    <div>
      <p>Quantity: {quantity}</p>

      {/* Decrement button (-)
      //Calls decrement function on click and disabled if quantity is 1 */}
      <button
        onClick={decrement}
        disabled={quantity === minQuantity}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50"
        >
          Decrement
        </button>
      {/* Increment button (+)
      //Calls increment function on click and disabled if quantity is 20 */}
      <button
        onClick={increment}
        disabled={quantity === maxQuantity}
        className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Increment
      </button>

      <p>Allowed range: 1 - 20</p>
    </div>
  );


}

