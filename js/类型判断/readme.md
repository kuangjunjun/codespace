# typeof
1. 可以准确判断除 null 之外的原始类型
2. 可以判断function


# instanceof
1. 只能判断引用类型
2. 且是通过原型链查找来判断的

# Object.prototype.toString.call(xxx)

1.
2.
3. 将 O 作为 ToObject(this) 的执行结果
4. 让 class 成为 O 内部属性 [[class]] 的值
5. 返回由三个字符串" [object "、 class和" ] "连接而成的字符串值。

# Array.isArray(arr)

obj.toString()