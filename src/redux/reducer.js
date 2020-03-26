import {initialState} from "./initial-state";
import {
  SET_SELECTED_AREA,
  SET_SELECTED_CATEGORY,
  SEARCH_LIST
} from "./actions";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };
    case SET_SELECTED_AREA:
      return {
        ...state,
        selectedArea: action.payload
      };
    case SEARCH_LIST:
      if(!state.selectedArea) {
        return state;
      }
      if(!state.selectedCategory){
        return state;
      }
      return {
        ...state,
        results: state.data[state.selectedArea][state.selectedCategory]
      }
    default:
      return state;
  }
};

