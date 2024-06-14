# localStorage
1. 浏览器的本地存储，时效性是永久有效,需要手动清理浏览器缓存才会失效
2. 存储为一个对象，且值只能是字符串
3. 大约5M
4. 为每一个域名开辟的存储空间

- setItem(key,value)
- getItem(key)
- removeItem(key)
- clear()

# sessionStorage
1. 时效性： 当前这次会话结束时就会自动销毁


# Cookies
1. 不受前端掌控，由后端控制


# Web SQL
1. 浏览器上的模拟数据库  (已经弃用)

# IndexedDB
1. 浏览器提供的本地数据库
2. 异步
3. 支持使用js编写逻辑来创建，打开，插入，查询，删除 IndexedDB 中的数据
4. 键值对存储
5. 大容量（没有上限）
6. 永久存储
