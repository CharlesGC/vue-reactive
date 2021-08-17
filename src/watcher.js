// 这里的watcher主要是用来连接组件的渲染函数
import Dep, { pushTarget, popTarget } from "./dep.js";
export default class Watcher {
    constructor(getter, options = {}) {
        const { computed, watch, cb } = options
        // getter 相当于传进来的渲染函数
        this.getter = getter
        this.computed = computed
        this.watch = watch
        this.cb = cb
        this.value = undefined

        if (computed) {
            this.dep = new Dep()
        } else {
            this.get()
        }
    }

    get() {
        pushTarget(this)
        // 执行渲染函数的过程中会触发相应数据的get函数，就会将当前的渲染函数放到deps数组中。
        this.value = this.getter()
        popTarget()
        return this.value
    }

    depend() {
        this.dep.depend()
    }

    update() {
        if (this.computed) {
            this.get()
            this.dep.notify()
        } else if (this.watch) {
            const oldValue = this.value
            this.get()
            this.cb(oldValue, this.value)
        } else {
            this.get()
        }
    }
}