import React, { useState } from "react";
import styles from "../../src/styles.module.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(""); 
  const handleButtonClick = (value) => {
    if (value === "C") {
      setExpression(""); 
    } else if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className={styles.calculator}>
      <input type="text" value={expression} readOnly />
      <div>
        {result}
      </div>
      <div className={styles.calRow}>
        {[7, 8, 9, "+"].map((value, index) => (
          <button
            key={index}
            className={styles.btn}
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className={styles.calRow}>
        {[4, 5, 6, "-"].map((value, index) => (
          <button
            key={index}
            className={styles.btn}
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className={styles.calRow}>
        {[1, 2, 3, "*"].map((value, index) => (
          <button
            key={index}
            className={styles.btn}
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className={styles.calRow}>
        {["C", 0, "=", "/"].map((value, index) => (
          <button
            key={index}
            className={styles.btn}
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
