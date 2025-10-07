"use client";
import { useState } from "react";

//Handle submit function
export default function HandleSubmit() {

  const submitFunction = (event) => {
    event.preventDefault();
    alert ("Form submitted!");
    //Handle form data

    //Create an item object
    const item = {
      name: name,
      quantity: quantity,
      category: category
    };

    //Log item object to console
    console.log(item);
  }
  }
  return (
    <form onSubmit={submitFunction}>
      <button type="submit" className="bg-blue-500 text-white rounded p-4 border-2 hover:bg-blue-600">
        Submit
      </button>
    </form>
  );

