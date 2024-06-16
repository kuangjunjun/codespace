var todoData = []

var addTodo = document.querySelector('.btn')  // 按钮
var todoList = document.getElementById('todo-list')




function addNewTodo() {
    // 获取input中的内容
    if (document.getElementById('newTodo').value.trim() !== '') {
        todoData.push({
            id: Math.floor(Date.now()),
            title: document.getElementById('newTodo').value,
            completed: false
        })

        // 渲染新的li
        render()
    }
}

// 将todoData中的数据渲染出来
function render() {
    var str = ''

    todoData.forEach(function (item) {
        str += `
            <li class="item">
                    <div class="flex">
                        <input type="checkbox" class="item-check">
                        <p class="item-content">${item.title}</p>
                        <span class="close">×</span>
                    </div>
            </li>
        `
    })
    todoList.innerHTML = str

}

addTodo.addEventListener('click', addNewTodo)
