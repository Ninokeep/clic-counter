import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from "../../../stores/count/constant";
import countReducer from "../../../stores/count/reducer";

describe("countReducer", () => {
  it("should return the initial state", () => {
    const initialState = { counter: 0 };
    expect(countReducer(undefined, {})).toEqual(initialState);
  });

  it("should INCREMENT the initial state", () => {
    const initialState = { counter: 0 };
    const action = { type: INCREMENT_COUNT };
    const expectedState = { counter: 1 };
    expect(countReducer(initialState, action)).toEqual(expectedState);
  });

  it("should DECREMENT the initial state", () => {
    const initialState = { counter: 10 };
    const action = { type: DECREMENT_COUNT };
    const expectedState = { counter: 9 };
    expect(countReducer(initialState, action)).toEqual(expectedState);
  });

  it("should NOT DECREMENT the initial state when he is less 1", () => {
    const initialState = { counter: 0 };
    const action = { type: DECREMENT_COUNT };
    const expectedState = { counter: 0 };
    expect(countReducer(initialState, action)).toEqual(expectedState);
  });
});
