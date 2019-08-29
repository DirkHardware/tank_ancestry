import React, { Component } from "react";

class TankCard extends Component {
    state = {clicked: false}

    clickHandler = () => this.setState({ clicked: !this.state.clicked });

    render() {
        console.log('tank card render firing')
        return (
            <div tankName = {this.props.tankInfo.name}>
                <center>
                <h1 className="tank-name">{this.props.tankInfo.name}</h1>
                <img onClick={this.clickHandler}src={this.props.tankInfo.img} alt={this.props.tankInfo.name} />
                {this.state.clicked ? <h2>Country: {this.props.tankInfo.country}</h2> : null}
                {this.state.clicked ? <h3>Introduced: {this.props.tankInfo.year}</h3> : null}
                {this.state.clicked ? <h3>Era: {this.props.tankInfo.era}</h3> : null}
                {this.state.clicked ? <p className="strengths"> Strengths: {this.props.tankInfo.strengths}</p> : null}
                {this.state.clicked ? <p className="weaknesses" >Weaknesses: {this.props.tankInfo.weaknesses}</p> : null}
                </center>
                
            </div>
        )
    }

}

export default TankCard; 