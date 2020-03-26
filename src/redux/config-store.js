import { createStore } from "redux";
import { reducer } from "./reducer";
export default function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
  );
  return store;
}

