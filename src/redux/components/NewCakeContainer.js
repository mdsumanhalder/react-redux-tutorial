import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../cake/cakeActions";
const NewCakeContainer = ({ buyCake, numOfCakes }) => {
  const [number, setNumber] = useState(1);
  console.log(buyCake);
  return (
    <div>
      <h2>Number of cakes:{numOfCakes}</h2>
      <input
        type="text"
        name=""
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="button" onClick={() => buyCake(number)}>
        Buy {number} Cake
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  numOfCakes: state.numOfCakes,
});
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
