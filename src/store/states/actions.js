import { Connection } from "../../http/Connection";

export async function ActionGetState(context, payload) {
  return await new Promise((resolve, reject) => {
    Connection
      .get(`states/find/${payload}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  })
}

export async function ActionGetStates(context) {
  return await new Promise((resolve, reject) => {
    Connection
      .get("states")
      .then((response) => context.commit("SHOW_STATES", response.data))
      .catch((error) => reject(error));
  })
}
