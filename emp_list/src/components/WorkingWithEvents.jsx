import React from "react";
import "./empStyle.css";
export default function WorkingWithEvents() {
    function buttonClicked(event) {
        alert(event.target.defaultValue);
    }

    function getInputData(event) {
        alert(event.target.value);
    }

    return (
        <div>
            <h1>Working with Events</h1>
            Enter Name: <input type="text" id="userName" onChange={getInputData} /><br/><br/>
            <input id="1" type="button" value="Click to Display Event Alert Box 1" onClick={buttonClicked} />
            <input id="2" type="button" value="Click to Display Event Alert Box 2" onClick={buttonClicked} />
            <input id="3" type="button" value="Click to Display Event Alert Box 3" onClick={buttonClicked} />
        </div>
    )
}