import React from "react";

export default function ConditionalOperators(props) {

    var displayData = 1;

    function outputHTML() {
        if(props.isDisplayDetails) {
            return (
                <div>
                    <h1>User Name is : Mayank</h1><hr/>
                    <div>
                        <h2>Additional Info</h2>
                        <h3>User Id: 1</h3>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>User Name is : Mayank</h1><hr/>
                </div>
            )
        }
    }

    return (
        <div>
            <h1>User Name is : Mayank</h1><hr/>
            { (props.isDisplayDetails == "true" || displayData == 0) && (
                <div>
                    <h2>Additional Info</h2>
                    <h3>User Id: 1</h3>
                </div>
            )}
        </div>
    )
}