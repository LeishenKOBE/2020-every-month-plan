import { def } from "./utils";

export default class Observer {
  constructor(value) {
    def(value, "__ob__", this, false);
  }
  
}
