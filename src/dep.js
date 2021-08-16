// 用来管理页面上data的依赖，就是在访问响应式数据的时候，将那些依赖这些数据的渲染函数收集起来。
// Dep.target 就是当前js正在渲染的组件，因为一个组件会对应一个watcher所以当渲染到一个组件时，就将这个组件的watcher放入到一个栈中，每次只把当前的watcher，放到依赖数组中。
const targetStack = []
import Watcher from "./watcher.js"
export default class Dep {
    constructor() {
        this.deps = new Set()
    }

    depend() {
        if (Dep.target) {
            this.deps.add(Dep.target)
        }
    }
    notify() {
        this.deps.forEach(watcher => watcher.update())
    }
}

export function pushTarget(_target) {
    if (Dep.target) {
        console.log(Dep.target);
        targetStack.push(Dep.target)
        Dep.target = _target
    }
}
export function popTarget() {
    Dep.target = targetStack.pop()
}

// 正在运行的watcher
Dep.target = Watcher