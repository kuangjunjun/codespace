# 复杂组件设计

Todos

- 组件公式
    UI Component + store
    组件不要超过一百行
    性能 + 复用

- 组件树
    看到页面，先想下组件树划分
    App.vue
    TodoList.vue  胆子轻了，代码就少
    TodoItem.vue  UI

- 复杂数据业务组件
    - 数据驱动页面
    - 积累常见的做法
        - todos filterTodos
        - tabs 切换
            - 标记选中状态 visibility = 'all' 
            - 动态绑定类名 :class = "{selected: visibility==key}"
            - click 事件 visibility -> 相应的
