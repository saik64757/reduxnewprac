import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number Of Cakes-{props.numberofCakes}</h2>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numberofCakes: state.cake.numberofCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { buyCake: () => dispatch(buyCake()) };
};

export default connect(mapStatetoProps, mapDispatchToProps)(CakeContainer);
