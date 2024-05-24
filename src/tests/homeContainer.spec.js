import { INCREMENT, DECREMENT } from "../containers/HomeContainer/constant";
import homeContainerReducer from "../containers/HomeContainer/reducer";

describe("homeContainerReducer", () => {
  it("should return the initial state", () => {
    const initialState = { counter: 0 };
    expect(homeContainerReducer(undefined, {})).toEqual(initialState);
  });

  it("should INCREMENT the initial state", () => {
    const initialState = { counter: 0 };
    const action = { type: INCREMENT };
    const expectedState = { counter: 1 };
    expect(homeContainerReducer(initialState, action)).toEqual(expectedState);
  });

  it("should DECREMENT the initial state", () => {
    const initialState = { counter: 10 };
    const action = { type: DECREMENT };
    const expectedState = { counter: 9 };
    expect(homeContainerReducer(initialState, action)).toEqual(expectedState);
  });

  it("should NOT DECREMENT the initial state when he is less 1", () => {
    const initialState = { counter: 0 };
    const action = { type: DECREMENT };
    const expectedState = { counter: 0 };
    expect(homeContainerReducer(initialState, action)).toEqual(expectedState);
  });
});
