import React from "react";

export default function TimerComponent() {
    var timer = `${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`;

    setInterval(() => {
        var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`;
        timer = currentTime;
        console.log(timer)
    }, 1000)

    return (
        <h1>Current Time is: {timer}</h1>
    )
}