// import React, { Component } from 'react'

// export default class CChild extends Component {
//   render() {
//     return (
//         <div>
//             <h4>子组件</h4>
//             <p>{this.props.msg}</p>
//         </div>
//     )
//   }
// }


function CChild(props) {
    console.log(props);
    // props.msg = '修改从父组件中传来的值'  不能修改，会报错

    return (
        <div>
            <h4>子组件</h4>
            <p>{props.msg}</p>
        </div>
    )
}

export default CChild