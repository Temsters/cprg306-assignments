"use client";
import { useState } from "react";

export default function HandleSubmit({ onSubmit }) {
  
 //State variable called name & setter called setName
  const [name, setName] = useState("");

  //State variable called category and setter function called setCategory
  const [category, setCategory] = useState("produce")