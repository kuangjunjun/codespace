# js数组有哪些方法
1. 增: push unshift splice  concat 
2. 删: pop shift splice  slice
3. 改: reverse sort 
4. 查: indexOf lastIndexOf includes(返回true or flase) find
5. 遍历: forEach map filter every some reduce
6. 转换: join 

- forEach map 区别:
 1. map会返回一个新的数组
 2. return无法终止forEach的循环， forEach中没有 break 和 continue


# 2. 字符串有哪些方法
 1. 增 concat PadStart PadEnd
 2. 删 slice substr
 3. 改 replace repeat  trim  trimLeft trimRight  toLowerCase  toUpperCase
 4. 查 includes  indexOf  lastIndexof  charAt(通过下标访问)   startsWith  endsWith
 5. 转换： charCodeAt(返回编码)   split


# 3.  == 和 === 的区别
 

# 4. 说说js中的类型转换
 - 是什么
  js中有原始类型: xxx 和  引用类型 的区分

 - 显示隐式
  1. 开发中通常需要将一个类型转为另一个类型时通过调用构造函数实现显示类型转换
  2. 当开发中碰到 比较运算符 或者算术运算符时，当符号两边的类型不一致时，js引擎会自动进行类型转换


# 5. 说说深拷贝
  - 是什么
  拷贝指的是将一个对象中的元素复制到一个新的对象中，拷贝又分为浅拷贝和深拷贝，浅拷贝只拷贝对象的引用地址，
  深拷贝会层层拷贝每一个属性值，不受原对象修改值的影响

  - 浅拷贝常见方法:
   1. Object.assign
   2. 解构
   3. concat
   4. slice

  - 深拷贝常见方法
    JSON.parse(JSON.stringify(a))    ---- 不能拷贝Symbol function undefined 
    不能处理循环引用 和 BigInt

    structuredClone --- 不能拷贝 Symbol function

  - 函数的拷贝


# 6. 说说你对闭包的理解
  - 是什么
  根据词法作用域的规则，内部函数一定能访问它外部函数的变量，当内部函数对外部函数中的变量存在引用并且被提到外部函数
  之外调用，即使外部函数执行完毕，它的执行上下文也无法被完全销毁，而是会将内部函数引用的变量作为一个集合保留在调用
  栈中，该集合被称为闭包

  集合是闭包

  - 作用
    1. 定义私有变量
    2. 封装模块
    3. 延长变量的声明周期
    
  - 缺点
    1. 内存泄露


# 7. 说说原型
  - 是什么
  原型是一个对象，分为隐式原型和显式原型，隐式原型是对象上的__proto__属性，显式原型是函数上的prototype属性，
  当我们要访问一个对象的属性时，js引擎不仅会在对象上查找，还会查找对象的隐式原型，顺着隐式原型层层往上查找，
  直到找到Null。对象的隐式原型等于创建该对象的构造函数的显示原型

    1. 函数的__proto__ === Function.prototype  箭头函数除外
    2. Object.create(null)


# 8. js中如何实现继承
  1. 原型链继承 
  缺点： 1.多个实例之间共用了同一个原型，属性相互影响
        2. 子类无法给父类传参

  2. 构造函数继承
  缺点： 1. 无法继承到父类原型上的属性

  3. 组合继承 （经典继承）
  缺点： 1. 父类被调用两次

  4. 原型式继承
  缺点:  1. 多个对象共用了同一个原型，属性会相互影响

  5. 寄生组合继承

# 9. 说说你对this的理解
 - 是什么
    this是函数中的一个关键字，用于代表函数作用域的指向

 - 绑定规则
    1. 默认绑定  --- 函数在哪个词法作用域中生效，this就指向哪个词法作用域, 词法作用域要找到底
    2. 隐式绑定  --- 当函数被一个对象所拥有且调用，this指向该对象
    3. 隐式丢失  --- 多个对象链式调用函数，this指向最近的对象
    4. 显示绑定  --- call apply bind
    5. new绑定   ---  this 指向实例对象

 - 箭头函数
  箭头函数没有this,写在箭头函数内的this也是它外部非箭头函数的this