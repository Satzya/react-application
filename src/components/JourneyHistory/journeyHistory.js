import React from "react";
import Authorization from './../auth'
let Auth = new Authorization();
class JourneyHistory extends React.Component {
    render() {
        return (Auth.getValue()) ? <div><h1>Journey History</h1></div>
            : <div><h1>Invalid User</h1></div>
    }
}

export default JourneyHistory;