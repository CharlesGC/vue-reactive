import { Watcher, reactive } from '../src/index.js';

const data = reactive({
    msg: 'Hello World',
    number: 1
})

new Watcher(() => {
    document.getElementById('app').innerHTML = `
        <p>当前data的状态是：</p>
        ${JSON.stringify(data)}
        <p>请在控制台输入data，分别改变data.msg尝试效果</p>
        <p>data.msg被Watcher了，可以打印出新旧值的变化</p>
        msg is ${data.msg} <br>
    `
})

;window.data = data