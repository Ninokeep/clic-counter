import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import Home from "../../views/Home/Home";
import { makeSelectHomeContainerCounter } from "./selector";
import {
  decrementCountAction,
  incrementCountAction,
} from "../../stores/count/action";
import { useInjectReducer } from "../../utils/injectReducer";

import countReducer from "../../stores/count/reducer";

const key = "homeContainer";

function HomeContainer(props) {
  useInjectReducer({ key, reducer: countReducer });

  return <Home {...props} />;
}

const mapStateToProps = createStructuredSelector({
  counter: makeSelectHomeContainerCounter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => dispatch(incrementCountAction()),
    onDecrement: () => dispatch(decrementCountAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeContainer);
