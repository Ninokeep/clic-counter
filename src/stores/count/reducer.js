import { INCREMENT_COUNT, DECREMENT_COUNT } from "./constant";

export const initialState = {
  counter: 0,
};

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter,
      };
    default:
      return state;
  }
}
