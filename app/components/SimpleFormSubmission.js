"use client";
import { useState } from "react";

//Create handleSubmit function to handle form submission
export default function HandleSubmit({ onSubmit }) {

  //State variables
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  //Handle form submission
  const submitFunction = (event ) => {
    event.preventDefault();

  //Item object 
    const item = {
      name,
      category
    };

    //Log item object to console
    console.log(item);

    //Display alert with current state of name quantity and category
    alert(`Submitted: ${JSON.stringify(item)}`);


    //Reset the state variables to their initial values
    setName("");
    setCategory("produce");
  };

    return (
      //Create form with onSubmit event handler
      <div>
        <form className=" mb-4 border-2 border-blue-300 p-4 rounded bg-white" onSubmit={submitFunction}>
          <input type="text" placeholder="e.g., milk, 4L🥛" value={name} onChange={(e) => setName(e.target.value)} required />
        </form>
      </div>
    )
  }

