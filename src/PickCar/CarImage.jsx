import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import ThreeSixTy from 'react-360-view'
export default class CarImage extends Component {
    render() {
        const {imgName} = this.props
        return (
            <div>
                <img src={`./images/${imgName}/civic-1.jpg`} className="w-100"alt="car" />
            </div>
        )
    }
}
//     componentDidMount(){
//         const node = ReactDOM.findDOMNode(this);
//         ReactDOM.render(<div
//             class="cloudimage-360 w-100"
//             data-folder="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car/"
//             data-filename="iris-{index}.jpeg"
//             data-amount="36"
//             data-magnifier="3"
//             data-spin-reverse
//           ></div>, node)
//     }
// }
