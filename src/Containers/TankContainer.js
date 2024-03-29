import React, { Component } from "react";
import TankCard from "../Components/TankCard.js";

class TankContainer extends Component {
    state= { tanksArray: [] }

    componentDidMount(){
        console.log('TankContainer mounted')
        fetch('http://localhost:3000/tanks')
        .then(resp => resp.json())
        .then(data => this.setState({tanksArray: data}))
    }

    render(){
        console.log('tank container render firing')
        console.log(this.state.tanksArray)
        let tankComponents = this.state.tanksArray.map(
            tank => <TankCard 
                key={tank.name}
                tankInfo={tank}
                /> 
        )
        return(
            <div className="TanksContainer">
                <ul>{tankComponents}</ul>
            </div>
        ) 
    }
}

export default TankContainer;