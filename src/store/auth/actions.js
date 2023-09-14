// import { api } from "boot/axios";
import { Connection } from "../../http/Connection";
import router from "../../router";
import { Notify } from "quasar";

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload);
  commit("SET_TOKEN", payload);
};

export async function ActionLoginUserRefresh({ dispatch }, refreshLogin = false) {
  console.log(refreshLogin)
  if (refreshLogin == true) {
    router()
      .push({ path: '/login' })
      .then(() => { router().go() })
  }
};

export async function ActionLoginUser({ dispatch }, payload) {
  localStorage.removeItem("token");
  return await new Promise((resolve, reject) => {
    Connection.post("auth/login", payload)
      .then((response) => {
        if (response.statusCode == 401) {
          Notify.create({
            message: "Usuário ou senha incorretos",
            color: "negative",
            closeBtn: true,
            position: "top",
          })
          return;
        }
        localStorage.setItem('token', response.data.original.access_token)
        console.log('auth_token', localStorage.getItem('token'))
        this.$router.push('/');
      })
      .catch((error) => {
        console.log(error)
        Notify.create({
          message: "Usuário ou senha incorretos",
          color: "negative",
          closeBtn: true,
          position: "top",
        })
        // reject(error)
      });
  })
}

export async function ActionGetProfile(context, payload) {
  return await new Promise((resolve, reject) => {
    Connection.get("auth/profile")
      .then((response) => {
        console.log(response.data)
        resolve(response.data)
      })
      .catch((error) => {
        // if (error.response.status == 401) {
        //   this.$router.push('/login');
        // }
        reject(error)
      })
  })
}

export async function ActionLogoutProfile(context, payload) {
  return await new Promise((resolve, reject) => {
    Connection.post("auth/logout")
      .then((response) => {
        localStorage.removeItem("token");
        this.$router.push('/login');
      })
      .catch((error) => {
        reject(error)
      })
  })
}

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
