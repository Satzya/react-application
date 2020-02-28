import React from "react";
import './Login.css'

const evaluateUser = (event) => {
    event.preventDefault()
    const userName = event.target.theUserName.value;
    const password = event.target.theUserPassword.value;
    console.log(userName, password)
    if (userName === 'abc' && password === '123')
        accessDashBoard(11);
    else if (userName === 'def' && password === '456')
        accessDashBoard(22);
    else
        alert("Invalid credentials");
}

const accessDashBoard = (role, props) => {
    if (role === 11){
     
    }
}

const Login = () => {
    return (
        <div>
            <form onSubmit={evaluateUser}>
                <h1>Login Page</h1>
                <label>User Name</label>
                <input type="text" name="theUserName" /><br />
                <label>Password</label>
                <input type="password" name="theUserPassword" /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;