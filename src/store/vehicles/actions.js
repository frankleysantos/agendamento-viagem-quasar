import { Connection } from "../../http/Connection";
import { Notify } from 'quasar'

export async function ActionGetVehicles(context) {
  return await new Promise((resolve, reject) => {
    Connection
      .get("vehicles/show")
      .then((response) => context.commit("SHOW_VEHICLES", response.data))
      .catch((error) => reject(error));
  })
}

export async function ActionSaveVehicle(context, payload) {
  return await new Promise((resolve, reject) => {
    Connection.post("vehicles/store", payload)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
}

export async function ActionUpdateVehicle(context, payload) {
  return await new Promise((resolve, reject) => {
    Connection.post(`vehicles/update/${payload.id}`, payload)
      .then((response) => {
        Notify.create({
          type: 'positive',
          message: 'This is a "positive" type notification.',
          position: "top-right"
        });
        resolve(response.data);
      })
      .catch((error) => reject(error))
  })
}
// export async function salvarCategoria(context, params) {
//   const data = new FormData();
//   data.append("key", params.key);
//   data.append("descricao", params.descricao);

//   return await api
//     .post("api/auth/categoria/store", data)
//     .then((response) => context.commit("NOVA_CATEGORIA", response.data));
// }

// export async function atualizarCategoria(context, params) {
//   const data = { key: params.key, descricao: params.descricao };
//   return await api
//     .put("api/auth/categoria/update/" + params.id, data)
//     .then((__) => context.commit("UPDATE_CATEGORIA", params));
// }

// export async function excluirCategoria(context, id) {
//   return await api
//     .delete("api/auth/categoria/delete/" + id)
//     .then((__) => context.commit("DELETE_CATEGORIA", id));
// }
