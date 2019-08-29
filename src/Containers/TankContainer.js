import React, { Component } from "react";
import TankCard from "../Components/TankCard.js";

class TankContainer extends Component {
    state= { allTanksArray: [],
            ww2Array: [],
            coldWarArray: [],
            selectedArray: []
    }

    componentDidMount(){
        // console.log('TankContainer mounted')
        fetch('http://localhost:3000/tanks')
        .then(resp => resp.json())
        .then(data => this.setState({
            allTanksArray: data,
            ww2Array: data.filter(tank => tank.era === 'World War II'),
            coldWarArray: data.filter(tank => tank.era === 'Cold War'),
            selectedArray: data
        }))
    }


    changeEra = (era) => {
        if(era === "World War II") {
            this.setState({selectedArray: this.state.ww2Array})        
        }
        else if(era === 'Cold War') {
            this.setState({selectedArray: this.state.coldWarArray})
        }
        else if(era ==='All') {
            this.setState({selectedArray: this.state.allTanksArray})
        }
    }

    searchTanks = event => {
        if(event.target.value.length > 0) {
        console.log(event.target.value)
        this.setState({selectedArray: this.state.allTanksArray.filter(tank => tank.name.includes(event.target.value))})
        }
        else {this.setState({selectedArray: this.state.allTanksArray})}
    }

    render(){
        // console.log('tank container render firing')
        // console.log(this.state.allTanksArray) 
        let tankComponents = this.state.selectedArray.map(
            tank => <TankCard 
                key={tank.name}
                tankInfo={tank}
                /> 
        )
        return(
            <div className="TanksContainer">
                <center>
                <button onClick={() => this.changeEra('World War II')}>World War II</button>
                <button onClick={() => this.changeEra('Cold War')}>Cold War</button>
                <button onClick={() => this.changeEra('All')}>All Eras</button>
                </center>
                <center>
                <input type="text" name="tank-search" id="tank-search" onChange={this.searchTanks} value={this.state.messageText}/>
                </center>
                <ul>{tankComponents}</ul>
            </div>
        ) 
    }
}

export default TankContainer;