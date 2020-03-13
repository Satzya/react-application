import React from "react";
import ConfigApiDetails from '../services/configApi'
let Auth = new ConfigApiDetails();
class JourneyHistory extends React.Component {

    val = async () => {
        console.log("await Auth")
        console.log(await Auth.journeyData())
        return (await Auth.journeyData()) ? <div><h1>Journey History</h1></div>
            : <div><h1>Invalid User</h1></div>
    }
    render() {
        return (<label onClick={this.val}>P</label>)
    }
}

export default JourneyHistory;