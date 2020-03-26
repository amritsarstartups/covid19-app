export const SET_SELECTED_AREA = "SET_SELECTED_AREA";
export function setSelectedArea(payload) {
  return {
    type: SET_SELECTED_AREA,
    payload
  }
}

export const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
export function setSelectedCategory(payload) {
  return {
    type: SET_SELECTED_CATEGORY,
    payload
  }
}

export const SEARCH_LIST = "SEARCH_LIST";
export function searchList(payload) {
  return {
    type: SEARCH_LIST,
    payload
  }
}
