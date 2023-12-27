# js事件流 （面试题: 事件触发过程是什么样的?）
1. 在window上往事件触发处传播, 遇到注册的  捕获  事件会触发
2. 达到事件触发处
3. 在事件触发处往window上传播, 遇到注册的 冒泡 事件会触发

- js事件默认都在冒泡的过程触发
- event.stopPropagation() || event.stopImmediatePropagation()  阻止默认事件传播
- event.stopImmediatePropagation()  阻止同一dom绑定多个相同事件

# 事件委托
借助冒泡机制，将原本要添加在多个子容器上的事件，添加到父容器上