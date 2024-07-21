

import { useState } from "react";
import "./App.css";
import Button from "./components/Btn";
import CheckBoxes from "./components/CheckBoxes";
import Divider from "./components/Divider";

const checkBoxes = [
  {
    title: "Page 1",
    name: "p1",
  },
  {
    title: "Page 2",
    name: "p2",
  },
  {
    title: "Page 3",
    name: "p3",
  },
  {
    title: "Page 4",
    name: "p4",
  },
];

function App() {
  const [checkedState, setCheckedState] = useState(
    checkBoxes.reduce((acc, checkbox) => {
      acc[checkbox.name] = false;
      return acc;
    }, {})
  );
  const [allChecked, setAllChecked] = useState(false);
  
  const handleAllChange = () => {
    const newCheckedState = {};
    checkBoxes.forEach((checkbox) => {
      newCheckedState[checkbox.name] = !allChecked;
    });
    setCheckedState(newCheckedState);
    setAllChecked(!allChecked);
    // console.log(allChecked,'ncs')x
  };

  const handleCheckboxChange = (name) => {
    const newCheckedState = {
      ...checkedState,
      [name]: !checkedState[name],
    };
    setCheckedState(newCheckedState);
    setAllChecked(Object.values(newCheckedState).every((isChecked) => isChecked));
  };

  return (
    <div className="flex justify-center h-[90vh] items-center">
      <form className="flex flex-col items-center w-[370px] h-[326px] shadow-md rounded-lg py-[10px] border-[1px] border-[#EEEEEE]">
        <CheckBoxes title={"All Pages"} name={"ap"} isChecked={allChecked} onChange={handleAllChange} />
        <Divider />
        {checkBoxes.map((check) => (
          <CheckBoxes
            key={check.name}
            title={check.title}
            name={check.name}
            isChecked={checkedState[check.name]}
            onChange={() => handleCheckboxChange(check.name)}
          />
        ))}
        <Divider />
        <Button />
      </form>
    </div>
  );
}

export default App;
