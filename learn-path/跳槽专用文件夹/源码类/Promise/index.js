const PENDING = " pending";
const FULLFILLED = "fullfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.onFulfilledQueue = [];
    this.reason = undefined;
    this.onRejectedQueue = [];

    try {
      executor(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }
  resolve = (value) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = FULLFILLED;
    this.value = value;

    this.onFulfilledQueue.forEach((fn) => {
      fn(value);
    });
  };
  reject = (reason) => {
    if (this.value !== PENDING) {
      return;
    }
    this.status = REJECTED;
    this.reason = reason;

    this.onRejectedQueue.forEach((fn) => {
      fn(reason);
    });
  };
  then(onFulfilled, onRejected) {
    if (this.status === FULLFILLED) {
      onFulfilled(this.value);
    } else if (this.status === REJECTED) {
      onRejected(this.reason);
    } else if (this.status === PENDING) {
      this.onFulfilledQueue.push(onFulfilled);
      this.onRejectedQueue.push(onRejected);
    }
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
}

let pro = new MyPromise((resolve, reject) => {
  reject("error");
});

pro.catch((error) => console.warn(error));
