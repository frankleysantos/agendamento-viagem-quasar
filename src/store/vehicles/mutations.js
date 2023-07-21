export function ADD_VEHICLE(state, vechicle) {
  state.vechicles.push(vechicle);
}

export function SHOW_VEHICLES(state, vechicles) {
  state.vechicles = vechicles;
}

export function UPDATE_VEHICLE(state, vechicle) {
  state.vechicles = [
    ...state.vechicle.map((item) =>
      item.id !== vechicle.id ? item : { ...item, ...vechicle }
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
