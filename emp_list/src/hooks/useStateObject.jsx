import React, { useState, useEffect } from "react";

export default function UsingHooksObject() {

    var [empList, setEmpList] = useState([]);
    
    var [counter, setCounter] = useState({
        name: "Mayank",
        age: 30,
        designation: "Developer",
        salary: [10, 13, 18, 24]
    });

    useEffect(() => {
        fetch("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").then((data) => {
            return data.json()
        }).then((data) => {
            setEmpList(data);
        })
    }, [])

    useEffect(() => {
        console.log("empList Data Updated...");

        
    }, [empList]);

    useEffect(() => {
        debugger
        console.log("Counter Data Updated...");
        return () => {
            debugger;
            console.log("Destroyed")
        }
    }, [counter]);

    useEffect(() => {
        console.log("It Always Trigger...");
    })

    function updateName() {
        setCounter({
            ...counter,
            name: "Anshul",
            age: 40,
            salary: [...counter.salary, 35]
        })
    }

    return (
        <div>
            <showDetails empList={empList} updateName={updateName}></showDetails>

            <hr/>
            <h1>Counter Value is: {counter.name}</h1>
            <h2>Counter Value is: {counter.age}</h2>
            <h3>Counter Value is: {counter.designation}</h3>
            <h4>Salary Length: {counter.salary.length}</h4>
            <input type="button" value="Update Name" onClick={updateName}  />
        </div>
    )
}

function showDetails(props) {
    var [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Counter: {counter}</h1>
            {props.empList.map((emp) => {
                return (
                    <showDetails emp={emp.name} ></showDetails>
                )
            })}

            <input type="button" onClick={props.updateName} value="Update Name" />

            <OtherChildComponent counter={counter}></OtherChildComponent>
        </div> 
    )   
}

function OtherChildComponent() {
    var [timer, setTimer] = useState("");

    return (
        <div> {counter} </div>
    )
}