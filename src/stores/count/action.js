import { INCREMENT_COUNT, DECREMENT_COUNT } from "./constant";

export function incrementCountAction() {
  return {
    type: INCREMENT_COUNT,
  };
}

export function decrementCountAction() {
  return {
    type: DECREMENT_COUNT,
  };
}
