import { useState } from "react";
function App() {

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  // step is the variable and setStep is a f() that updates the state
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);


  const handlePrevious = () => {
    setStep(Math.max(1, step - 1));
  };

  const handleNext = () => {
    setStep(Math.min(3, step + 1));
  };

  return (
    <div className="steps">
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
      {isOpen ? (
        <>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

        <div className="message">{messages[step - 1]}</div>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
             onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div onClick={() => setIsOpen(true)}>Click on the X to open the steps</div>
      )}
    </div>
  );
}

export default App;
