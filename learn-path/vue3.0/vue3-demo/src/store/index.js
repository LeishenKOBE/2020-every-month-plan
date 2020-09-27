import { createStore } from "vuex";
import state from "./state";
import mutations from "./mutation";

export default createStore({
  state,
  mutations,
});
