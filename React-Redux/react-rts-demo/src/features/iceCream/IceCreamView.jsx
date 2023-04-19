import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { iceOrder, refill } from "./icecreamSlice";

function IceCreamView() {
  const [refillValue, setrefillValue] = useState(1);
  const numberofIcecreams = useSelector(
    (state) => state.iceCream.numberofIcecreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Creams - {numberofIcecreams}</h2>
      <button onClick={() => dispatch(iceOrder())}>Order Icecream</button>
      <input
        type="number"
        value={refillValue}
        onChange={(e) => {
          return setrefillValue(e.target.value);
        }}
      />
      <button onClick={() => dispatch(refill(refillValue))}>
        Restock Ice Creams
      </button>
    </div>
  );
}

export default IceCreamView;
