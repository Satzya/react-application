import React from "react";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './Dashboard.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonName: 'Add Record',
            active: "active"
        }
    }

    setNavData = (idContent) => {
        if (idContent === "Profile") {
            this.setState({ buttonName: "Profile" })
        } else {
            this.setState({ buttonName: "Add Record" })
        }
    }

    render() {
        return (
            <div hidden={this.props.hiddenFlag}>
                <Header userName={this.props.userName} setNavData={this.setNavData} active={this.state.active} />
                <h1 className="User-data">Dashboard</h1>
                <button className="btn Add-record">{this.state.buttonName}</button>
                <Footer />
            </div>
        )
    }
}

export default Dashboard;