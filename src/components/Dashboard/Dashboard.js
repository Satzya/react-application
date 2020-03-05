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
            inputType: "text",
            sectionHeading: "Plan Journey",
            currentValue: "",
            journeyDetails: {
                inputPlaceHolder: "Source",
                date: "Date"
            },
            formData: {
                sourceInput: "",
                destInput: "",
                dateInput: ""
            },
            steps: "Step 1",
            dashHiddenFlag: false,
            profileHiddenFlag: true,
            inputTextHiddenFlag: false,
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

    counter = 0
    getNextData = (event) => {
        event.preventDefault()
        switch (this.counter) {
            case 0: {
                this.setState({
                    journeyDetails: {
                        ...this.state.journeyDetails,
                        inputPlaceHolder: "Destination"
                    }, steps: "Step 2", currentValue: this.state.formData.destInput, backButtonDisabled: false
                })
                this.counter += 1;
                console.log(this.counter)
                break;
            } case 1: {
                this.setState({
                    journeyDetails: {
                        ...this.state.journeyDetails,
                        inputPlaceHolder: "Date"
                    }, steps: "Step 3", currentValue: this.state.formData.dateInput, inputType: "date"
                })
                this.counter += 1
                break;
            } case 2: {
                this.setState({ inputTextHiddenFlag: true, steps: "Review Particulars" })
                this.counter += 1
            }
        }
    }
    getBackData = (event) => {
        event.preventDefault()
        console.log(this.counter)
        switch (this.counter) {
            case 3: {
                this.setState({ steps: "Step 3", inputType: "date", inputTextHiddenFlag: false, currentValue: this.state.formData.dateInput })
                this.counter -= 1
                break;
            }
            case 2: {
                this.setState({
                    journeyDetails: {
                        ...this.state.journeyDetails,
                        inputPlaceHolder: "Destination"
                    }, steps: "Step 2", inputType: "text", inputTextHiddenFlag: false, currentValue: this.state.formData.destInput
                })
                this.counter -= 1
                break;
            }
            case 1: {
                this.setState({
                    journeyDetails: {
                        ...this.state.journeyDetails,
                        inputPlaceHolder: "Source"
                    }, steps: "Step 1", backButtonDisabled: true, currentValue: this.state.formData.sourceInput
                })
                this.counter -= 1
                break;
            }
        }
    }
    setFormData = (inputBlock, event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [inputBlock]: event.target.value /* In order to pass key element as a parameter we use [...] instead of directly assigning the params */
            }
        })
    }

    evaluateInput = (event) => {
        console.log(event.target.value);
        this.setState({ currentValue: event.target.value })
        switch (event.target.name) {
            case "Source": {
                this.setFormData("sourceInput", event)
                break;
            } case "Destination": {
                this.setFormData("destInput", event)
                break;
            } case "Date": {
                this.setFormData("dateInput", event)
                break;
            }
        }
    }

    dashBoardContent = () => {
        return (
            <div>
                <h1 className="User-data">{this.state.sectionHeading}</h1>
                <div hidden={this.state.dashHiddenFlag}>
                    <label>{this.state.steps}</label><br />
                    <div>
                        <form>
                            <input type={this.state.inputType} placeholder={this.state.journeyDetails.inputPlaceHolder} name={this.state.journeyDetails.inputPlaceHolder} onChange={this.evaluateInput} value={this.state.currentValue} hidden={this.state.inputTextHiddenFlag} /><br />
                            <div hidden={!this.state.inputTextHiddenFlag}>
                                <h3><label>Source: {this.state.formData.sourceInput}</label></h3><br />
                                <h3><label>Destination: {this.state.formData.destInput}</label></h3><br />
                                <h3><label>Journey: {this.state.formData.dateInput}</label></h3><br />
                            </div>
                            <button className="btn btn-primary backButtonPlacer" disabled={this.state.backButtonDisabled} onClick={this.getBackData}>Back</button>
                            <button className="btn btn-primary nextButtonPlacer" onClick={this.getNextData}>Next</button>
                        </form>
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