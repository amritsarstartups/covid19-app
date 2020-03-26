import { data } from"../data/vendorlist";

export const initialState = {
  serviceableAreas: data.areas,
  categoriesList: data.categories,
  data,
  selectedArea: null,
  selectedCategory: null
}
