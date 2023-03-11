import React, { useState } from "react";
import "./App.css";
import Data from "./data.json";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPages = 3;
  const lastIndex = currentPage * recordPages;
  const firstIndex = lastIndex - recordPages;
  const records = Data.slice(firstIndex, lastIndex);
  const npages = Math.ceil(Data.length / recordPages);

  const clickNextPerson = () => {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("No more people!");
    }
  };
  return (
    <div className="App">
      <div className="header">
        <h1>PEOPLE DATA</h1>
        <button className="button" onClick={clickNextPerson}>
          NEXT PERSON
        </button>
      </div>
      {records.map((list, index) => {
        const recordNumber = firstIndex + index + 1;
        return (
          <div className="data-container" key={index}>
            <h1 className="number">{recordNumber}</h1>
            <h1 className="name">Name: {list.name}</h1>
            <h1 className="location">Location: {list.location}</h1>
          </div>
        );
      })}
      <p className="curent-data">CURRENTLY {records.length} PEOPLE SHOWING</p>
    </div>
  );
}

export default App;
