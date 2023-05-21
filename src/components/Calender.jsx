import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "long",
  });
}

function Calender() {
  const curr = new Date();
  const currentDate = curr.getDate();
  const currentMonth = getMonthName(curr.getMonth() + 1);
  const [dateCount, setDateCount] = useState(currentDate);
  const [monthCount, setMonthCount] = useState(currentMonth);

  function IncrementDateHandler() {
    console.log("button was pressed")
    setDateCount(dateCount + 1);
  }

  function DecreaseDateHandler() {
    console.log("button was pressed")
    setDateCount(dateCount - 1);
  }

  function DecreaseMonthHandler() {
    setMonthCount(monthCount - 1);
  }

  function IncrementMonthHandler() {
    setMonthCount(monthCount + 1);
  }


  return (
    <>
      <div className="date-container">
        <AiOutlineLeft onClick={DecreaseDateHandler} />
        <p>{dateCount}</p>
        <AiOutlineRight onClick={IncrementDateHandler} />
      </div>
      <div className="month-container">
      <AiOutlineLeft onClick={DecreaseMonthHandler} />
       <p> {monthCount} </p> 
       <AiOutlineRight onClick={IncrementMonthHandler} />
       </div>
      <div>{curr.getFullYear()}</div>
    </>
  );
}

export default Calender;
