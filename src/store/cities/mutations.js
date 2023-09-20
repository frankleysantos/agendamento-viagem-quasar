export function ADD_STATE(state, citie) {
  state.cities.push(citie);
}

export function SHOW_CITIES(state, cities) {
  state.cities = cities;
}