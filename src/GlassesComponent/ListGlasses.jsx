import React, { Component } from 'react'

export default class ListGlasses extends Component {
    renderGlasses = (listGlasses, callback) => {
        return listGlasses.map((glasses, index) => {
            return (
                <div className="glasses">
                    <div 
                        className="glasses__img" 
                        style={{backgroundImage: `url(${glasses.url})`}} 
                        key={glasses.id}
                        onClick={() => callback(glasses)}>
                    </div>
                </div>
                
            )
        })
    }
    render() {
        const { listGlasses, chooseGlasses }= this.props
        // console.log(listGlasses)
        return (
            <div className="list__glasses">
                {this.renderGlasses(listGlasses, chooseGlasses)}
            </div>
        )
        
    }
}
