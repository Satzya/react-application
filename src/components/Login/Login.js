import React from "react";
import './Login.css'

class Login extends React.Component {

    evaluateUser = (event) => {
        event.preventDefault()
        const userName = event.target.theUserName.value;
        const password = event.target.theUserPassword.value;
        if (userName === 'abc' && password === '123')
            this.accessDashBoard(11, userName);
        else if (userName === 'def' && password === '456')
            this.accessDashBoard(22);
        else
            alert("Invalid credentials");
    }

    accessDashBoard = (role, userName) => {
        if (role === 11) {
            this.props.onLoginSuccess(userName)
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