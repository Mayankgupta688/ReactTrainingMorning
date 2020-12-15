import React from 'react';

export default class LiftingStateUp extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                username: "Anshul"
            }
        }

        this.updateName = this.updateName.bind(this);
        this.forceMeToUpdate = this.forceMeToUpdate.bind(this);
    }

    updateName() {
        debugger;
        this.setState({
            user: {
                username: "Ankit"
            }
        })
    }

    forceMeToUpdate() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <h1>User Name from Parent is: {this.state.user.username}</h1>
                <ChildComponent user={this.state.user} forceMeToUpdate={this.forceMeToUpdate} updateNameFromChild={this.updateName}></ChildComponent>
            </div>
        )
    }
}

function ChildComponent(props) {
    function informParent() {
        debugger;
        props.user.username = "Mayank"
        props.forceMeToUpdate();
    }

    return (
        <div>
            <h1>User Name from Child is: {props.user.username}</h1>
            <input type="button" onClick={informParent} value="Update Name" />
        </div>
    )
}