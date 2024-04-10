import React, { Component, createRef } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    inputRef = createRef()
    state = {
        list: ['html', 'css'],
        item: 'js',
    }

    add = () => {
        // this.state.list.push(this.state.item)
        // console.log(this.state.list);
        // let arr = this.state.list
        // arr.push(this.state.item)
        // this.setState({
        //     list: arr
        // })

        console.log(this.inputRef.current.value);
        this.setState({
            list: [...this.state.list, this.inputRef.current.value]
        })
    }

    changeHandler = (e) => {
        // console.log(e.target.value);
        this.setState({
            item: e.target.value
        })
    }

    handlerDel = (index) => {
        console.log(index);
        let arr = this.state.list
        arr.splice(index, 1)
        this.setState({
            list: arr
        })
    }


    render() {
        return (
            <div>
                <header>
                    {/* <input type="text" value={this.state.item} onChange={this.changeHandler}/> */}
                    <input type="text" ref={this.inputRef}/>
                    <button onClick={this.add}>提交</button>
                </header>
                <section>
                    <TodoItem item={this.state.list} cb={this.handlerDel} />
                </section>
            </div>
        )
    }
}