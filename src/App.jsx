import { useState } from "react";
import "./App.css";

function App() {
  let [height, setHeight] = useState("");
  let [weight, setWeight] = useState("");
  let [bmi, setBmi] = useState(null);
  let [bmiStatus, setBmiStatus] = useState("");
  let [errorMsg, setErrorMsg] = useState("");

  const getBmi = () => {
    
    const checkHeight = /^\d+$/.test(height);
    const checkWeight = /^\d+$/.test(weight);

    if (checkHeight && checkWeight) {
      let heightInMeter = height / 100;
      let bmiVal = weight / (heightInMeter * heightInMeter);
      setBmi(bmiVal.toFixed(2));
      if (18.5 > bmiVal) {
        setBmiStatus("Under weight");
      } else if (bmiVal >= 18.5 && bmiVal < 25) {
        setBmiStatus("Normal weight");
      } else if (bmiVal >= 25 && bmiVal < 30) {
        setBmiStatus("Over weight");
      } else {
        setBmiStatus("Obesity");
      }

      setErrorMsg("");
    } else {
      setHeight("");
      setWeight("");
      setBmi(null);
      setErrorMsg("Please enter valid input!");
    }
  };

  const clear = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMsg("");
  };
  return (
    <>
      <div className="container">
        <h2>Calculate BMI</h2>
        <div className="input-group">
          <label htmlFor="height">Height (Cm) </label>
          <input
            id="height"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="weight">Weight (Kg) </label>
          <input
            id="weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <button onClick={getBmi}>Calculate</button>
          <button onClick={clear}>Clear</button>
        </div>

        {bmi && (
          <div className="output-group">
            <p>
              You BMI is <span>{bmi}</span>
            </p>
            <p>
              BMI status: <span> {bmiStatus}</span>
            </p>
          </div>
        )}
        <p className="errorMsg">{errorMsg}</p>
      </div>
    </>
  );
}

export default App;
