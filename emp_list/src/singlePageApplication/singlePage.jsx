import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";

export default class SinglePage extends React.Component {
    render() {
        return (
            <BrowserRouter>

                <Link style={{paddingRight: "10px"}} to="/home">Home</Link>
                <Link style={{paddingRight: "10px"}} to="/about">About</Link>
                <Link style={{paddingRight: "10px"}} to="/help">Help</Link>
                <Link style={{paddingRight: "10px"}} to="/ddsfgsf">Random</Link>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomeComponent}></Route>
                        <Route exact path="/home/:userId/:userName" component={HomeComponent}></Route>
                        <Route exact path="/help" component={HelpComponent}></Route>
                        <Route exact path="/about" component={AboutComponent}></Route>
                        <Route component={PageNotFound}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

function PageNotFound() {
    return <h1>Page Not Found...</h1>
}

function AnotherHomeComponent() {
    return (
        <h1>Other Component for Mayank</h1>
    )
}

function AnotherHomeComponentOne() {
    return (
        <h1>Other Component for Anshul</h1>
    )
}


function HomeComponent(props) {
    var [employee, setEmployee] = useState({});
    useEffect(() => {
        alert(`My User Name is ${props.match.params.userName}`)
        fetch(`https://5a530e1477e1d20012fa066a.mockapi.io/employeedata/${props.match.params.userId}`).then((data) => {
            return data.json()
        }).then((data) => {
            setEmployee(data);
        })
    }, [])
    return (
        <div>
            <div>
                <Route path="/home/:userId/Mayank" component={AnotherHomeComponent}></Route>
                <Route path="/home/:userId/Anshul" component={AnotherHomeComponentOne}></Route>
                <h1>Employee Name is: {employee.name}</h1>
            </div>    
        </div>
    )
}

function AboutComponent() {
    return <h1>This is About Page</h1>
}

function HelpComponent() {
    return <h1>This is Help Page</h1>
}