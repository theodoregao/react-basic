import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function UseCallbackDemo(props) {
  const [age, setAge] = useState(33);
  const [salary, setSalary] = useState(1000);

  const increaseAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, [age]);

  const increaseSalary = useCallback(() => {
    setAge((prevSalary) => prevSalary + 1);
  }, [salary]);

  return (
    <div>
      <Title>Use Callback Demo</Title>
      <Count text="Age" count={age} />
      <Button onClickHander={increaseAge}>Increase Age</Button>
      <Count text="Salary" count={salary} />
      <Button onClickHander={increaseSalary}>Increase Salary</Button>
    </div>
  );
}

export default UseCallbackDemo;
