import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restored } from "./cakeSlice";

function CakeView() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restored(5))}>Restock cakes</button>
    </div>
  );
}

export default CakeView;
