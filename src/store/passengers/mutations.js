export function ADD_VEHICLE(state, passenger) {
  state.passengers.push(passenger);
}

export function SHOW_PASSENGERS(state, passengers) {
  state.passengers = passengers;
}

export function UPDATE_VEHICLE(state, passenger) {
  state.passengers = [
    ...state.passenger.map((item) =>
      item.id !== passenger.id ? item : { ...item, ...passenger }
    ),
  ];
}

export function DELETE_CATEGORIA(state, categoriaId) {
  // state.vechicles.forEach(function (c, index) {
  //   if (c.id === categoriaId) {
  //     state.categoria.splice(index, 1);
  //   }
  // });
}
