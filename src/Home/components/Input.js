import React from "react";
import SearcherImage from './../utils/Searcher.png'; 
import {useState} from 'react';

const Input = ({onHandleInput}) => {
  const [numbers, setNumbers] = useState("")

  const handleInput =(e) => {
    setNumbers(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleInput(numbers);
    setNumbers("")
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full shadow-xl">
        <input
          onChange={handleInput}
          className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
          value={numbers}
        />
        <div className="p-4">
          <button className="bg-pink-300 text-black rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            <img src={SearcherImage} alt="Button Image" className="h-6 w-6" /> 
          </button>
        </div>
      </form>
    </div>
  );

};

export default Input;