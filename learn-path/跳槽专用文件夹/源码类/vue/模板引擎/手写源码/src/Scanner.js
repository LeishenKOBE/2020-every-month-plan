export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr;
    this.pos = 0;
    this.tail = templateStr;
  }
  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      this.pos += tag.length;
      this.tail = this.templateStr.substring(this.pos);
    }
  }
  scanUntil(stopTag) {
    const pos_back = this.pos;
    while (
      this.tail.indexOf(stopTag) != 0 &&
      this.pos < this.templateStr.length
    ) {
      this.pos++;
      this.tail = this.templateStr.substr(this.pos);
    }
    return this.templateStr.substring(pos_back, this.pos);
  }
}
