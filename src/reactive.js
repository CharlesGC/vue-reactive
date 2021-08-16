/**
 * 主处理逻辑 将数据变为响应式
 */
import Dep from "./dep";
import { isObject } from "./utils";

export default function reactive(data) {
    if (isObject(data)) {
        Object.keys(data).forEach(key => {
            defineReactive(data, key)
        })
    }
    return data
}

function defineReactive(data, key) {
    let val = data[key]
    // 收集依赖,会给data中每个key都新建一个依赖收集器
    const dep = new Dep()
    Object.defineProperty(data, key, {
        get() {
            // 依赖的当前的那个组件的渲染函数
            dep.depend()
            return val
        },
        set(newVal) {
            val = newVal
            dep.notify()
        }
    })
    // 处理对象嵌套
    if (isObject(val)) {
        reactive(val)
    }
}