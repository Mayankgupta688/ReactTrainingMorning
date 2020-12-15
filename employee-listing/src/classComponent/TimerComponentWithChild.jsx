import React from "react";

export default class TimerComponentWithChild extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: this.getLatestTime()
        }

        setInterval(() => {
            this.setState({
                timer: this.getLatestTime()
            })
        }, 1000);
    }

    getLatestTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`;
    }

    render() {
        return (
            <div>
                <DumbComponentClass currentTime={this.state.timer}></DumbComponentClass>
            </div>
        )
    }
}

function DumbComponent(props) {
    return (
        <div>
            <h1>Current Time is: {props.currentTime}</h1>
        </div>
    )
}

class DumbComponentClass extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "Ankit"
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;    
    }

    render() {
        this.props.currentTime = new Date().toTimeString();
        return (
            <div>
                <h1>Hello {this.state.userName} Current Time from Class Component is: {this.props.currentTime}</h1>
            </div>
        )
    }
}