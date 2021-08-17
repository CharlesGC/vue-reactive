import { Watcher, reactive, computed, watch } from '../src/index.js';

const data = reactive({
    msg: 'Hello World',
    number: 1
})

const computedNumber = computed(() => data.number + 1)

new Watcher(() => {
    document.getElementById('app').innerHTML = `
        <p>当前data的状态是：</p>
        ${JSON.stringify(data)}
        <p>请在控制台输入data，分别改变data.msg尝试效果</p>
        <p>data.msg被Watcher了，可以打印出新旧值的变化</p>
        msg is ${data.msg} <br>
    `
})
    
new Watcher(() => {
    document.getElementById('c-app').innerHTML = `
        computed: 1 + number 是 ${computedNumber.value}
    `
})
    
watch(() => data.msg, (oldValue, newValue) => {
    console.log('old', oldValue);
    console.log('new', newValue);
}) 

;window.data = data