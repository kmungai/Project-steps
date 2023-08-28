import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((i) => i - 1); //using a call back fctn. coul also be set by "setStep(step +1)" BAD PRACTICE
    }
    //return step > 1 ? setStep(step - 1) : null; // used the ternary operator above
  }

  function handleNext() {
    if (step < 3) {
      setStep((i) => i + 1);
      // return step < 3 ? setStep(step +1) : null;
    }
  }

  // function handleClose() {
  //   if (isOpen) setIsOpen(!isOpen);
  //   // Alternatively: setIsOpen inside the onclick using arrow fctn
  //   // onclick=(() => setIsOpen(!isOpen))
  // }

  return (
    <>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
       */}

      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#FFF" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#FFF" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
