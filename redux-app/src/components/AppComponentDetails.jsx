import React from "react";
import * as actions from "../actions/index";

import {connect} from "react-redux";

function App(props) {
    return (
        <div>
            <h1>OtherComponent</h1>
            <div>
                {props.movies.map((movie) => {
                    return <h2>Movie Name: {movie.name}</h2>
                })}
            </div>
        </div>
    )  
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

var AppComponentDetails = connect(mapStateToProps, actions)(App);

export default AppComponentDetails;

