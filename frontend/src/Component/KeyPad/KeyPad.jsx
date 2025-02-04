import React, { useState, useEffect } from "react";
import { IoBackspaceOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export const KeyPad = () => {
  const [inputValue, setInputValue] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const handleButtonClick = (value) => {
    setInputValue((prev) => prev + value);
  };

  const handleBackspace = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const handlePrintValue = () => {
    console.log(inputValue);
  };

  // Toggle cursor visibility every 500ms for blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 p-4">
      <div className="text-white text-4xl mb-10">Enter Amount</div>
      <div className="bg-white p-5 rounded-1">
        
        <div className="h-16 mb-4 bg-white border rounded-lg shadow-md flex items-center justify-center text-xl">
          <span>
            {inputValue}
            {cursorVisible && <span className="blink text-gray-400">|</span>}
          </span>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 10 }, (_, i) => (
            <button
              key={i}
              className="w-32 h-16 bg-blue-500 text-white text-xl rounded-lg shadow hover:bg-blue-600 focus:outline-none"
              onClick={() => handleButtonClick(i.toString())}
            >
              {i}
            </button>
          ))}

          <button
            className="w-32 cursor-pointer flex justify-center items-center h-16 bg-red-500 text-white text-xl rounded-lg shadow hover:bg-red-600 focus:outline-none"
            onClick={handleBackspace}
          >
            <IoBackspaceOutline />
          </button>
          <button
            className="w-32 cursor-pointer flex justify-center items-center h-16 bg-red-500 text-white text-xl rounded-lg shadow hover:bg-red-600 focus:outline-none"
            onClick={handlePrintValue}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};
