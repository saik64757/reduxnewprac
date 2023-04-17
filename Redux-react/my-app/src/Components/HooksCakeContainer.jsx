import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/index";

function HooksCakeContainer() {
  const numberofCakes = useSelector((state) => state.cake.numberofCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes {numberofCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
