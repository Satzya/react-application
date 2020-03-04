import React from "react";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Profile from './../Profile/Profile';
import './Dashboard.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonName: 'Add Record',
            active: "active",
            navTabs: ["Home", "Profile", "Account"],
            dashHiddenFlag: false,
            profileHiddenFlag: true,
            sectionHeading: "Plan Journey",
            journeyDetails: {
                sourceLocation: "Source",
                destLocation: "Destination",
            },
            steps: "Step 1",
            backButtonDisabled: true
        }
    }

    setNavData = (idContent) => {
        idContent.currentTarget.parentNode.childNodes.forEach((element) => {
            element.classList.remove("active")
        })
        idContent.currentTarget.classList.add("active")
        switch (idContent.currentTarget.id) {
            case "Profile": {
                this.setState({ buttonName: "Profile" })
                this.setState({ profileHiddenFlag: false })
                this.setState({ dashHiddenFlag: true })
                this.setState({ sectionHeading: "Profile Details" })
                break;
            }
            case "Home": {
                this.setState({ buttonName: "Add data" })
                this.setState({ dashHiddenFlag: false })
                this.setState({ profileHiddenFlag: true })
                this.setState({ sectionHeading: "Plan Journey" })
                break;
            }
            default: {
                this.setState({ buttonName: "Non Operational" })
                break;
            }
        }
    }


    setChanges = (event) => {
        console.log(event.currentTarget.classList)
        this.setState({
            journeyDetails: Object.assign({}, this.state.journeyDetails, {
                sourceLocation: this.state.journeyDetails.destLocation
            })
        })
        this.setState({ steps: "Step 2" })
    }

    jj = () => {
        this.setState({ backButtonDisabled: false })
    }

    dashBoardContent = () => {
        return (
            <div>
                <h1 className="User-data">{this.state.sectionHeading}</h1>
                <div hidden={this.state.dashHiddenFlag}>
                    <label>{this.state.steps}</label><br />
                    <input type="text" placeholder={this.state.journeyDetails.sourceLocation} /><br />
                    <div>
                        <button className="btn btn-primary backButtonPlacer" disabled={this.state.backButtonDisabled} onClick={this.setChanges}>Back</button>
                        <button className="btn btn-primary nextButtonPlacer" onClick={this.jj}>Next</button>
                    </div>
                </div>
            </div>
        )
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
                {this.dashBoardContent()}
                <Profile profileHiddenFlag={this.state.profileHiddenFlag} />
                <Footer />
            </div>
        )
    }
}

export default Dashboard;