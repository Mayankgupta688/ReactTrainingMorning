import React, {useState, useEffect} from "react";

export default function IntervalData() {

    var [counter, setCounter] = useState(0);

    useEffect(() => {
        var data = setInterval(() => {
            setCounter(counter + 1);
        }, 1000);

        return () => {
            debugger;
            clearInterval(data)
        }
    });

    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
        </div>
    )
}