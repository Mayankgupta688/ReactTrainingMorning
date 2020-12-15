import getDesignation from "../functions/getDesignation";

export default function ContentComponent() {

    var userName = "Mayank";

    return (
        <div>
            <h2>Put Your HTML Content Here {1 + 1}</h2>
            <h3>Current Time is { new Date().toTimeString() }</h3>
            <h4>Random Number {Math.floor(Math.random() * 100)}</h4>
            <h5>User Name is: {userName}</h5>
            <h6>User Designation: {getDesignation()}</h6>
        </div>
    )
}