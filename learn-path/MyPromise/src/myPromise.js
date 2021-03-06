const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

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

        let resolved = (value) => {
            this.state = RESOLVED
            this.value = value
            this.onFulfilledQueue.map(fn=>fn(value))
        }
        let rejected = (reason) => {
            this.state = REJECTED
            this.reason = reason
            this.onRejectedQueue.map(fn=>fn(reason))
        }
        try {
            executor(resolved, rejected)
        } catch (e) {
            rejected(e)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw(err)
        }

        if (this.state === RESOLVED) {
            onFulfilled(this.value)
        }
        if (this.state === REJECTED) {
            onRejected(this.reason)
        }
        if (this.state === PENDING) {
            this.onFulfilledQueue.push(() => {
                onFulfilled(this.value)
            })
            this.onRejectedQueue.push(() => {
                onRejected(this.reason)
            })
        }
    }
}
