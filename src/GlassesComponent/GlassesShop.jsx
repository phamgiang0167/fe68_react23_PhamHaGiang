import React, { Component } from 'react'
import GlassesInfo from './GlassesInfo'
import Header from './Header'
import ListGlasses from './ListGlasses'
import Model from './Model'
import './Styles/style.css'
export default class GlassesShop extends Component {
    listGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        glasses: {}
    }
    chooseGlasses = (glasses) => {
        this.setState({
            glasses: glasses
        })
    }
    render() {
        const { glasses } = this.state 
        return (
            <div className="body container-fluid" style={{backgroundImage: "url(./glassesImage/background.jpg)"}}>
                <div className="overplay"></div>
                <Header />
                <div>
                    <div className="row">
                        <div className="col-6">
                            <div className="show">
                                <Model glasses={glasses}/>
                                <GlassesInfo glasses={glasses}/>
                            </div>                       
                        </div>
                        <div className="col-6 show">
                            <div className="show">
                                <Model glasses={glasses}/>
                            </div> 
                        </div>
                    </div>
                </div>
                <ListGlasses listGlasses={this.listGlasses} chooseGlasses={this.chooseGlasses}/>
            </div>
        )
    }
}
