export function ADD_STATE(state, statePayload) {
  state.states.push(statePayload);
}

export function SHOW_STATES(state, statePayload) {
  state.states = statePayload;
}

export function UPDATE_STATE(state, statePayload) {
  state.states = [
    ...state.state.map((item) =>
      item.id !== statePayload.id ? item : { ...item, ...statePayload }
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
