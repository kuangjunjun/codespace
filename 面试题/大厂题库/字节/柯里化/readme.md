# 柯里化  （颗粒化） curry
 - 将接收多个参数的函数转变为多个接受一个参数的函数

 - 为什么要柯里化
    1. 函数的粒度更小，更聚焦  （函数式编程）
    2. 参数复用，降低通用型，提高适用性

 - 实现 
    1. curry 函数接收一个函数作为参数，并返回一个新的函数
    2. 将新的函数帮忙接收参数，如果接收的参数没有达到原函数的参数个数，就继续返回又一个新的函数（递归）
    3. 直到一层一层返回的函数体接收的参数个数等于原函数的参数个数，就执行函数




后端二次封装了 jsonwebtoken 模块，提供了 sign 和 verify 方法，在 sign 方法中，设置了token的签名，
和过期时间，在 verify 方法中，验证 token 的签名和过期时间