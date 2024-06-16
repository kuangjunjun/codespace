var todoData = []

var btn = document.querySelector('.btn')
var input = document.querySelector('.content')

var todoList = document.getElementById('todo-list')

var delData = document.querySelectorAll('.close')

function addNewTodo() {
    if (input.value.trim() !== '') {
        todoData.push({
            id: Math.floor(Date.now()),
            title: input.value.trim(),
        })
    }

    render()

    delData.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log(index);
            todoData.splice(index, 1)
            render()
        })
    })
}

function render() {
    var str = ''

    todoData.forEach(item => {
        str += `
            <div class="item">
                <div class="flex">
                    <input type="checkbox" class="item-check">
                    <div class="item-content">${item.title}</div>
                    <div class="close">X</div>
                </div>
            </div>
        `
    })

    todoList.innerHTML = str
}

btn.addEventListener('click', addNewTodo)


