const REJECTED = 'rejected';
const RESOLVED = 'resolved';
const PENDING = 'pending';

export class MyPromise {
    constructor(executor) {
        if (executor && typeof executor !== 'function') {
            throw new Error('MyPromise executor is not a function')
        }
        this.state = PENDING
        this.value = undefined
        this.reason = undefined

        this.onFulfilledQueue = []
        this.onRejectedQueue = []
        let resolve = (value) => {
            this.state = RESOLVED
            this.value = value
            this.onFulfilledQueue.map(fn => fn(this.value))
        }
        let reject = (reason) => {
            this.state = REJECTED
            this.reason = reason
            this.onRejectedQueue.map(fn => fn(this.reason))
        }

        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw(err)
        }

        let promise2 = new MyPromise((resolve, reject) => {
            if (this.state === RESOLVED) {
                setTimeout(() => {
                    resolvePromise(promise2, onFulfilled(this.value), resolve, reject)
                }, 0)
            }
            if (this.state === REJECTED) {
                setTimeout(() => {
                    resolvePromise(promise2, onRejected(this.reason), resolve, reject)
                }, 0)
            }
            if (this.state === PENDING) {
                this.onFulfilledQueue.push(() => {
                    resolvePromise(promise2, onFulfilled(this.value), resolve, reject)
                })
                this.onRejectedQueue.push(() => {
                    resolvePromise(promise2, onRejected(this.reason), resolve, reject)
                })
            }
        })
        return promise2
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        reject('不允许循环调用')
    }
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        let then = x.then
        if (typeof then === 'function') {
            then.call(x, res => resolvePromise(promise2, res, resolve, reject), err => reject(err))
        } else {
            resolve(x)
        }
    } else {
        resolve(x)
    }
}
