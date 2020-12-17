import React from "react";
import EmployeeDetails from "./EmployeeDetails";
import ShowNameHeader from "./ShowNameHeader";

export default function IterateData(props) {

    function getDataForRendering() {
        var displayArray = [];
        for(let i = 0; i< props.employeeList.length; i++) {
            displayArray.push((
                <div>
                    <ShowNameHeader name={props.employeeList[i].name}></ShowNameHeader>
                    <EmployeeDetails employee={props.employeeList[i]}></EmployeeDetails>
                </div>
            ))
        }
        return displayArray;
    }

    return (
        <div>
            {props.employeeList.map((employee) => {
                return (
                    <div>
                        <ShowNameHeader name={employee.name}></ShowNameHeader>
                        <EmployeeDetails employee={employee}></EmployeeDetails>
                    </div>
                )
            })}
        </div>
    )
}