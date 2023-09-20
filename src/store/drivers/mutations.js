export function ADD_DRIVER(state, driver) {
  state.drivers.push(driver);
}

export function SHOW_DRIVERS(state, drivers) {
  state.drivers = drivers;
}

export function UPDATE_DRIVER(state, driver) {
  state.drivers = [
    ...state.driver.map((item) =>
      item.id !== driver.id ? item : { ...item, ...driver }
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
