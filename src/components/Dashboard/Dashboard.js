import React from "react";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './Dashboard.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonName: 'Add Record',
            active: "active",
            active2: "active",
            navTabs: ["Home", "Profile", "Account"]
        }
    }

    setNavData = async (idContent) => {
        if (idContent.currentTarget.id === "Profile") {
            idContent.currentTarget.className = this.state.active
            idContent.currentTarget.classList.remove("active")
            console.log(idContent)
        }
        // await this.setState({ active2: "" })
        // console.log(this.state.active2)
        // this.setState({ buttonName: "Profile" })
    }

    render() {
        return (
            <div hidden={this.props.hiddenFlag}>
                <Header userName={this.props.userName}
                    setNavData={this.setNavData}
                    active={this.state.active}
                    navTabs={this.state.navTabs}
                />
                <h1 className="User-data">Dashboard</h1>
                <button className="btn Add-record">{this.state.buttonName}</button>
                <Footer />
            </div>
        )
    }
}

export default Dashboard;