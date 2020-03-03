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
            inactive: "",
            navTabs: ["Home", "Profile", "Account"]
        }
    }

    setNavData = async (idContent) => {
        console.log(idContent.currentTarget.id);
        switch (idContent.currentTarget.id) {
            case "Profile": {
                idContent.currentTarget.className = this.state.active
                this.setState({ active: "" })
                break;
            }
            case "Home": {
                idContent.currentTarget.className = this.state.active
                this.setState({ active: "" })
                break;
            }
            default: {
                console.log("HAHA")
            }
        }
    }

    render() {
        return (
            <div hidden={this.props.hiddenFlag}>
                <Header userName={this.props.userName}
                    setNavData={this.setNavData}
                    active={this.state.active}
                    inactive={this.state.inactive}
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