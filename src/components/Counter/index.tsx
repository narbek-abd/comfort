import React, { useState, useRef, useEffect } from "react";
import * as G from "../../globalStyle";
import * as S from "./style";

interface CounterProps {
  min: number;
  max: number;
  current: number;
  onChange: (count: number) => void;
}

const Counter: React.FC<CounterProps> = ({ min, max, current, onChange }) => {
  const [count, setCount] = useState<number | "">(current);
  const [warning, setWarning] = useState("");
  const minusBtn = useRef(null);
  const plusBtn = useRef(null);

  useEffect(() => {
    minusBtn.current.disabled = min == current;
    plusBtn.current.disabled = max == current
  }, []);

  function increment() {
    if (typeof count === "string") {
      setCount(min);
      onChange(+min);
      return;
    }

    if (count === +max - 1) {
      setCount(max);
      onChange(+max);
      plusBtn.current.disabled = true;
      return;
    }

    plusBtn.current.disabled = false;
    minusBtn.current.disabled = false;
    setWarning("");

    let newValue = count + 1;
    setCount(newValue);
    onChange(+newValue);
  }

  function decrement() {
    if (count === +min + 1) {
      setCount(min);
      onChange(+min);
      minusBtn.current.disabled = true;
      return;
    }

    plusBtn.current.disabled = false;
    minusBtn.current.disabled = false;
    setWarning("");

    let newValue = +count - 1;
    setCount(newValue);
    onChange(+newValue);
  }

  function changeCount(e: React.SyntheticEvent) {
    let value = (e.target as HTMLInputElement).value;

    if (value == "") {
      minusBtn.current.disabled = true;
      setCount("");
      return;
    } else {
      minusBtn.current.disabled = false;
    }

    let isNumber = /^\d*\.?\d*$/.test(value);
    if (!isNumber) return;

    if (+value > max) {
      setWarning(`Доступно только ${max}`);
      return;
    }

    if (+value < min) {
      setCount(min);
      onChange(+min);
      minusBtn.current.disabled = true;
      return;
    }

    minusBtn.current.disabled = +value == min;
    plusBtn.current.disabled = +value == max;

    setWarning("");
    setCount(+value);
    onChange(+value);
  }

  return (
    <S.Counter>
      <button onClick={decrement} ref={minusBtn}>
        -
      </button>
      <input type="text" value={count} onChange={changeCount} />
      <button onClick={increment} ref={plusBtn}>
        +
      </button>

      <S.Warning>{warning}</S.Warning>
    </S.Counter>
  );
};

export default Counter;
