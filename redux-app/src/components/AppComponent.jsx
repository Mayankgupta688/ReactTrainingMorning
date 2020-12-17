import React from "react";
import * as actions from "../actions/index";

import {connect} from "react-redux";

function App(props) {
    debugger;
    function addEmployee() {


        Axios.post("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata", {
            name: "New",
            createAdt: "dfgff"
        }).then((data) => {
            props.appendEmployee(data);
        })

        fetch("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").then((data) => {
            return data.json()
        }).then((data) => {
            props.addEmployeeList(data);
        });
    }


    function addMovies() {
        debugger
        var data = [
            {name: "xyz"},
            {name: "abc"},
            {name: "bbc"},

        ]
        props.addMovieList(data);
    }
    debugger;

    return (
        <div>
            <h1>This is App Component</h1>
            {props.employees.map((emp) => {
                return <h2>Employee Name: {emp.name}</h2>
            })}

            <input type="button" onClick={addEmployee} value="Add Employee" />
            <input type="button" onClick={addMovies} value="Add Movies" />
        </div>
    )  
}

function mapStateToProps(state) {
    return {
        employees: state.employees,
        movies: state.movies
    }
}

var AppComponent = connect(mapStateToProps, actions)(App);

export default AppComponent;

