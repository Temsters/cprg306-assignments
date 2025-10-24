"use client";
import SimpleFormSubmission from "../components/SimpleFormSubmission";
import { useState } from "react";

//New item component
export default function NewItem({ onAddItem }) {

  //State variable to handle form data
  const [formData, setFormData] = useState("");

  //Event handler function to add new item using onAddItem prop
  function handleAddItem(item) {
    setFormData(item);
    onAddItem(item);
  }

  return (
  <div className=" max-w-md bg-blue-100 dark:bg-gray-900 dark:border-blue-500 rounded-2xl lg:rounded ml-5 p-6 pt-6 border-2 border-blue-300">
      {/* Form component */}
      <SimpleFormSubmission onAddItem={handleAddItem} />
  </div>

  );


}

