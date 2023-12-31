import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import auth from "./auth";
import vehicles from "./vehicles";
import language from "./language";
import passengers from "./passengers";
import drivers from "./drivers";
import states from "./states";
import cities from "./cities";


// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      vehicles,
      language,
      passengers,
      drivers,
      states,
      cities
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
