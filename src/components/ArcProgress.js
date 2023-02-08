import React from 'react'
import ArcProgress from "react-arc-progress";
const progress = 0.1;
const text = "10";
const size = "150";
const fillColor = "#D6FB41";
const customText = [
  { text: "Mbps", size: "15px", color: "#242330",font:"Gilmer Medium", x: 70, y: 100 },
];

export default function App(props) {
    return (
      <div>
        <ArcProgress
          progress={progress}
          text={text}
          size={size}
          fillColor={fillColor}
          customText={customText}
          arcStart={130}
          arcEnd={410}
          observer={(current) => {
            const { percentage, currentText } = current;
            // console.log("observer:", percentage, currentText);
          }}
          animationEnd={({ progress, text }) => {
            // console.log("animationEnd", progress, text);
          }}
        />
      </div>
    );
  }
  