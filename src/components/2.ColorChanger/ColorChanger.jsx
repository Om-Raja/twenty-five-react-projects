import React, { useState } from "react";
import toast from "react-hot-toast";

function ColorChanger() {
  const [color, setColor] = useState("#484646");
  const [colorMode, setColorMode] = useState("hexadecimal");

  function randomNumGenerator(maxValue) {
    let index = Math.floor(Math.random() * (maxValue + 1)); // generates [0, 15)
    return index;
  }

  function copyColor() {
    window.navigator.clipboard.writeText(color);
    toast.success(`Copied ${color}`);
  }

  function switchColorMode() {
    if(colorMode === "hexadecimal"){
        setColorMode("rgb");
        setColor("rgb(67, 66, 66)");
        toast("Switched to RGB mode");
    }else{
        setColorMode("hexadecimal");
        setColor("#484646")
        toast("Switched to Hexadecimal mode")
    }

  }

  function generateHexColor() {
    if(colorMode != "hexadecimal"){
        toast.error("Your are in RGB color mode");
        return;
    }

    let hexColor = "#";
    const hexDigits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    for (let i = 0; i < 6; i++) {
      hexColor += hexDigits[randomNumGenerator(15)];
    }
    setColor(hexColor);
  }

  function generateRgbColor() {
    if(colorMode != "rgb"){
        toast.error("You are in Hexadecimal color mode");
        return;
    }

    let r = randomNumGenerator(255);
    let g = randomNumGenerator(255);
    let b = randomNumGenerator(255);

    let rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
  }

  return (
    <div style={{ width: "80vw", height: "90vh", background: color }}>
      <button style={{ marginTop: "10px" }} onClick={generateHexColor}>
        Generate HEX color
      </button>{" "}
      &nbsp;&nbsp;
      <button style={{ marginTop: "10px" }} onClick={generateRgbColor}>
        Generate RGB color
      </button>{" "}
      &nbsp;&nbsp;
      <button style={{ marginTop: "10px" }} onClick={switchColorMode}>
        Switch color mode &#123; HEX &lt;-&gt; RGB &#125;
      </button>
      <br />
      <br />
      {colorMode === "hexadecimal" ? (
        <p style={{ fontSize: "4em", fontWeight: "620"}}>HEX color : {color}</p>
      ) : (
        <p style={{ fontSize: "4em", fontWeight: "600"}}>RGB color : {color}</p>
      )}
      <button onClick={copyColor}>Copy to clipboard</button>
    </div>
  );
}

export default ColorChanger;
