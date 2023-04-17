import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_icecream } from "../redux/index";

function Icecreamcontainer() {
  const numberofIce = useSelector((state) => state.iceCream.numberofIcecream);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Buy Icecream {numberofIce}</h1>
      <button onClick={() => dispatch(buy_icecream())}>Buy Ice</button>
    </div>
  );
}

export default Icecreamcontainer;
