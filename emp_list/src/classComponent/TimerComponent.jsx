import React from "react";

export default class TimerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: this.getLatestTime(),
            counter: 0,
            currentCounter: 10
        }

        setInterval(() => {
            this.setState({
                timer: this.getLatestTime(),
                counter: this.state.counter + 1
            })
        }, 1000);

        this.resetCounter = this.resetCounter.bind(this);
    }

    getLatestTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`;
    }

    resetCounter() {
        this.state.currentCounter = 0;
        this.forceUpdate();
    }

    shouldComponentUpdate(newProps, newState) {
        if(newState.counter % 2 == 0) {
            return false
        }

        return true;
    }

    render() {
        return (
            <div>
                <h1>Current Timer Value is {this.state.timer}</h1>
                <h2>The Counter is {this.state.counter}</h2>
                <h3>Current Counter : {this.state.currentCounter}</h3>
                <input type="button" value="Reset Counter" onClick={this.resetCounter} />
            </div>
        )
    }
}