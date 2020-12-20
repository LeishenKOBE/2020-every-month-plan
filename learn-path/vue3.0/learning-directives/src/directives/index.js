import copy from "./copy";
import longpress from "./longpress";
import debounce from "./debounce";
import emoji from "./emoji";
import lazyload from "./lasyload";
import permission from "./permission";
import waterMarker from "./waterMarker";

const directives = {
  copy,
  longpress,
  debounce,
  emoji,
  lazyload,
  permission,
  waterMarker,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
