import React, { useState } from "react";
import data from "./data.js";
import "./style.css";

function Accordian() {
  let [thisAccord, setThisAccord] = useState([]);
  let [multiple, setMultiple] = useState(false);

  function handleAccordClick(accordId) {
    if (multiple) {
      const index = thisAccord.findIndex((item) => item === accordId);
      let copyArray = [...thisAccord];
      if (index == -1) {
        copyArray.push(accordId);
      } else {
        copyArray.splice(index, 1);
      }
      setThisAccord(copyArray);
    } else {
      accordId === thisAccord[0]
        ? setThisAccord([])
        : setThisAccord([accordId]);
    }
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setMultiple(!multiple);
          setThisAccord([]);
          !multiple? alert("Set to multiple accordian view") : alert("Set to single accordian view");
        }}
      >
        Toggle multiple
      </button>

      {data.map((accord) => {
        return (
          <div
            key={accord.id}
            className="accord"
            onClick={() => {
              handleAccordClick(accord.id);
            }}
          >
            <div className="accordHeader">
              <h3>{accord.question}</h3>
              <span>+</span>
            </div>
            {thisAccord.findIndex((item) => item === accord.id) + 1 ? (
              <p>{accord.answer}</p>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordian;
