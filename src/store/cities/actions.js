import { Connection } from "../../http/Connection";

export async function ActionGetCities(context, payload) {
  return await new Promise((resolve, reject) => {
    Connection
      .get(`states/${payload}/cities`)
      .then((response) => {
        context.commit("SHOW_CITIES", response.data);
        resolve(response.data)
      })
      .catch((error) => reject(error));
  })
}
