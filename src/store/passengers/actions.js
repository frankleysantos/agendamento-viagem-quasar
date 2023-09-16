import { Connection } from "../../http/Connection";

export async function ActionGetPassengers(context) {
  return await new Promise((resolve, reject) => {
    Connection
      .get("passengers/show")
      .then((response) => context.commit("SHOW_PASSENGERS", response.data))
      .catch((error) => reject(error));
  })
}

export async function ActionSavePassenger(context, payload) {
  console.log('passageiro');
  return await new Promise((resolve, reject) => {
    Connection.post("passengers/store", payload)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
}

export async function ActionUpdateVehicle(context, payload) {
  return await new Promise((resolve, reject) => {
    Connection.post(`vehicles/update/${payload.id}`, payload)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
}
