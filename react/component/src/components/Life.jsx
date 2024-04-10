import React, { Component, createRef } from 'react'

export default class Life extends Component {
    constructor() {
        super()
        console.log('Life 组件开始加载');
        this.state = {
            count: 1
        }
        this.ref = createRef()
    }

    handlerClick = () => {
        this.setState({
            count: this.state.count + 1
        })

        // this.state.count++
        // this.forceUpdate() // 强制render重新调用
    }

    shouldComponentUpdate() {
        return false
    }

    componentDidMount() {
        console.log('Life 组件挂载完成', this.ref.current);
    }

    componentDidUpdate() {
        console.log('Life 组件更新完成');
    }

    componentWillUnmount() {
        console.log('Life 组件即将卸载');
    }

    render() {
        console.log('Life 组件开始编译');
        return (
            <div>
                <h4 ref={this.ref} onClick={this.handlerClick}>{this.state.count}</h4>
            </div>
        )
    }
}
