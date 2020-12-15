import React from "react";
import "./empStyle.css";

export default function EmployeeDetails(props) {
    debugger;
    return (
        <div>   
            <h2>Employee Id is: {props.employee.id}</h2>
            <h3>Employee Created On: {props.employee.createdAt}</h3><hr/>
        </div>
    )
}