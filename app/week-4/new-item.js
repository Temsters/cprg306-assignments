"use client";
import { useState } from "react";

//New item component
export default function NewItem() {

  //State variable called quantity & setter called setQuantity
  const [quantity, setQuantity] = useState(1);
  
  //Increment function to increase quantity by 1 with a max of 20
  const increment = () => {
    setQuantity(Math.min(quantity + 1, 20));
  }

  //Decrement function to decrease quantity by 1, with a min of 1
  const decrement = () => {
    setQuantity(Math.max(quantity - 1, 1));
  }

  return (
    <p>Quantity: {quantity}</p>
    
  
);
}

