import React, { useState } from "react";

export default function UsingHooks() {
    var [counter, setCounter] = useState(10);

    function updateCounter() {
        debugger;
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
            <input type="button" value="Increment Counter" onClick={updateCounter} />
        </div>
    )
}