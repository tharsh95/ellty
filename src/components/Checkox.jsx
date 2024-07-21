import { useState } from "react";
const Checkbox = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [tickColor, setTickColor] = useState("text-white");
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setTickColor('text-white')
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if(!isChecked){
      setTickColor("text-gray-300")
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
    setTickColor("text-gray-400")
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    handleCheckboxChange();
  };

  return (
    <div
      className={`w-[370px] h-[42px] pt-[8px] pr-[15px] pb-[8px] pl-[22px] bg-[#FFFFFF] flex justify-between 
      `}
    >
      <h3 className="text-[14px]">{"All Pages"}</h3>
      <div
        className="relative w-[23px] h-[23px] cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="opacity-0 absolute inset-0 w-full h-full"
        />
        <div
          className={`absolute w-full h-full rounded-md flex items-center justify-center border-2 ${
            isPressed
              ? " border-gray-400"
              : isChecked
              ? isHovered
                ? "bg-blue-400 border-blue-400"
                : "bg-blue-500 border-blue-500"
              : isHovered
              ? ""
              : "border-gray-300"
          }`}
        >
          {(isHovered || isChecked || isPressed) && (
            <svg
              className={`w-4 h-4 ${tickColor}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
