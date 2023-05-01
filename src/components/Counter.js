import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reducers";
import style from "./Counter.module.css";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className={style.ctrDiv}>
      <button className={style.btn} onClick={() => dispatch(increment())}>
        +
      </button>
      <span className={style.ctr}>{count}</span>
      <button className={style.btn} onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}
