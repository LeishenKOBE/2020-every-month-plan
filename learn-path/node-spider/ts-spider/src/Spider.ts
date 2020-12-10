const http = require("http");
import SpiderOptions from "./interfaces/SpiderOptions";

class Spider {
  options: SpiderOptions;
  constructor(options: SpiderOptions) {
    this.options = options;
  }

  start() {}
}
