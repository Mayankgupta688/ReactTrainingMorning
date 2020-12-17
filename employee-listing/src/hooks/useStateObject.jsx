import React, { useState, useEffect } from "react";

export default function UsingHooksObject() {
    useEffect(() => {
        fetch("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").then((data) => {
            return data.json()
        }).then((data) => {
            setEmpList(data);
        })
    }, [])

    var [empList, setEmpList] = useState([]);
    
    var [counter, setCounter] = useState({
        name: "Mayank",
        age: 30,
        designation: "Developer",
        salary: [10, 13, 18, 24]
    });

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
            {empList.map((emp) => {
                return (
                    <div>
                        <h1>Employee Name is: {emp.name}</h1>
                    </div>    
                )
            })}

            <hr/>
            <h1>Counter Value is: {counter.name}</h1>
            <h2>Counter Value is: {counter.age}</h2>
            <h3>Counter Value is: {counter.designation}</h3>
            <h4>Salary Length: {counter.salary.length}</h4>
            <input type="button" value="Update Name" onClick={updateName} />
        </div>
    )
}