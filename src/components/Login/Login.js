import React from "react";
import './Login.css'
import ConfigApiDetails from './../services/configApi'
let ConfigApiDetailsCall = new ConfigApiDetails();
class Login extends React.Component {

    evaluateUser = async (event) => {
        event.preventDefault()
        const userName = event.target.theUserName.value;
        const password = event.target.theUserPassword.value;
        let user = await ConfigApiDetailsCall.loginData({ userName, password })
        this.accessDashBoard(user)
    }

    accessDashBoard = (user) => {
        if (user.role === 11) {
            this.props.onLoginSuccess(user.userName)
        }
    }
    setUserID = (event) => {
        this.props.getUserID(event.target.value)
    }
    render() {
        return (
            <div hidden={this.props.hiddenFlag}>
                <form onSubmit={this.evaluateUser}>
                    <h1>Login Page</h1>
                    <label>User Name</label>
                    <input type="text" name="theUserName" onChange={this.setUserID} /><br />
                    <label>UUID</label>
                    <input type="text" disabled value={`${this.props.userName}@org.com`} /><br />
                    <label>Password</label>
                    <input type="password" name="theUserPassword" /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;