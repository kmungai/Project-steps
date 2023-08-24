import React from "react";

export default function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message">hELLO</p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#FFF" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#FFF" }}>
          Next
        </button>
      </div>
    </div>
  );
}
