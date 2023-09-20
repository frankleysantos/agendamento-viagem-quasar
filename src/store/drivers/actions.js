import { Connection } from "../../http/Connection";

export async function ActionGetDriver(context, payload) {
  return await new Promise((resolve, reject) => {
    Connection
      .get(`drivers/find/${payload}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  })
}

export async function ActionGetDrivers(context) {
  return await new Promise((resolve, reject) => {
    Connection
      .get("drivers/show")
      .then((response) => context.commit("SHOW_DRIVERS", response.data))
      .catch((error) => reject(error));
  })
}

export async function ActionSaveDriver(context, payload) {
  return await new Promise((resolve, reject) => {
    Connection.post("drivers/store", payload)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
}

// export async function ActionUpdateVehicle(context, payload) {
//   return await new Promise((resolve, reject) => {
//     Connection.post(`drivers/update/${payload.id}`, payload)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error))
//   })
// }

// export async function ActionDeletePassenger(context, payload) {
//   return await new Promise((resolve, reject) => {
//     Connection.delete(`drivers/delete/${payload}`)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });
// }
