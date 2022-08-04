import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyIceCream from "../iceCream/iceCreamActions";
const IceCreamContainer = () => {
  const numofIceCream = useSelector((state) => state.iceCream.numofIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of IceCream-{numofIceCream}</h2>
      <button type="button" onClick={() => dispatch(buyIceCream())}>
        Buy IceCream
      </button>
    </div>
  );
};

export default IceCreamContainer;
