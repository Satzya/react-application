import React from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard'
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.state = {
      loginHiddenFlag: false,
      dashHiddenFlag: true,
      userName: ''
    }
  }

  onLoginSuccess = (userName) => {
    this.setState({ loginHiddenFlag: true, dashHiddenFlag: false, userName: userName })
  }

  getUserID = (userName) => {
    this.setState({ userName: userName })
  }

  render() {
    return (
      <div className="App">
        <Login hiddenFlag={this.state.loginHiddenFlag} onLoginSuccess={this.onLoginSuccess} userName={this.state.userName} getUserID={this.getUserID} />
        <Dashboard hiddenFlag={this.state.dashHiddenFlag} userName={this.state.userName} />
      </div>
    )
  }
}

export default App;