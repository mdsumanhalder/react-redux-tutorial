import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../cake/cakeActions";
const CakeContainer = ({ buyCake, numOfCakes }) => {
  console.log(buyCake);
  return (
    <div>
      <h2>Number of cakes:{numOfCakes}</h2>
      <button type="button" onClick={buyCake}>
        Buy Cake
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  numOfCakes: state.numOfCakes,
});
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
