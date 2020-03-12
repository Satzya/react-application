import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import ConfigApiDetails from '../services/configApi'
import JourneyHistory from './../JourneyHistory/journeyHistory'
import './Dashboard.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
let ConfigApiDetailsCall = new ConfigApiDetails();
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
                source: "",
                destination: "",
                date: ""
            },
            steps: "Step 1",
            dashHiddenFlag: false,
            profileHiddenFlag: true,
            inputTextHiddenFlag: false,
            backButtonDisabled: true,
            nextButtonDisabled: false,
            errorMsg: '',
            errorMsgFlag: false,
            textInput: React.createRef()
        }
    }

    componentDidMount() {
        this.state.textInput.current.focus();
    }

    setNavData = (idContent) => {
        idContent.currentTarget.parentNode.childNodes.forEach((element) => {
            element.classList.remove("active")
        })
        idContent.currentTarget.classList.add("active")
        switch (idContent.currentTarget.id) {
            case "Profile": {
                this.setState({
                    buttonName: "Profile",
                    profileHiddenFlag: false,
                    dashHiddenFlag: true,
                    sectionHeading: "Profile Details"
                })
                break;
            }
            case "Home": {
                this.setState({
                    buttonName: "Add data",
                    dashHiddenFlag: false,
                    profileHiddenFlag: true,
                    sectionHeading: "Plan Journey",
                })
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
        this.setState({ errorMsgFlag: false })
        this.state.textInput.current.focus();
        switch (this.counter) {
            case 0: {
                this.setState({
                    journeyDetails: {
                        ...this.state.journeyDetails,
                        inputPlaceHolder: "Destination"
                    }, steps: "Step 2", currentValue: this.state.formData.destination, backButtonDisabled: false
                })
                this.counter += 1;
                console.log(this.counter)
                break;
            } case 1: {
                this.setState({
                    journeyDetails: {
                        ...this.state.journeyDetails,
                        inputPlaceHolder: "Date"
                    }, steps: "Step 3", currentValue: this.state.formData.date, inputType: "date"
                })
                this.counter += 1
                break;
            } case 2: {
                this.setState({ inputTextHiddenFlag: true, steps: "Review Particulars" })
                this.counter += 1
                break;
            } case 3: {
                ConfigApiDetailsCall.saveData(this.state.formData)
            }
        }
    }
    getBackData = (event) => {
        event.preventDefault()
        this.setState({ errorMsg: '' })
        switch (this.counter) {
            case 3: {
                this.setState({ steps: "Step 3", inputType: "date", inputTextHiddenFlag: false, currentValue: this.state.formData.date })
                this.counter -= 1
                break;
            }
            case 2: {
                this.setState({
                    journeyDetails: {
                        ...this.state.journeyDetails,
                        inputPlaceHolder: "Destination"
                    }, steps: "Step 2", inputType: "text", inputTextHiddenFlag: false, currentValue: this.state.formData.destination
                })
                this.counter -= 1
                break;
            }
            case 1: {
                this.setState({
                    journeyDetails: {
                        ...this.state.journeyDetails,
                        inputPlaceHolder: "Source"
                    }, steps: "Step 1", backButtonDisabled: true, currentValue: this.state.formData.source
                })
                this.counter -= 1
                break;
            }
        }
    }
    validateDetails = (event) => {
        (event.target.value.length < 3) ? this.setState({ errorMsg: 'Min 3 Chars', errorMsgFlag: true, nextButtonDisabled: true })
            : this.setState({ errorMsg: '', nextButtonDisabled: false })
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
        this.setState({ currentValue: event.target.value })
        switch (event.target.name) {
            case "Source": {
                this.setFormData("source", event)
                break;
            } case "Destination": {
                this.setFormData("destination", event)
                break;
            } case "Date": {
                this.setFormData("date", event)
                break;
            }
        }
        if (this.state.errorMsgFlag) this.validateDetails(event) /* Validate input data */
    }

    dashBoardContent = () => {
        return (
            <div>
                <h1 className="User-data">{this.state.sectionHeading}</h1>
                <div hidden={this.state.dashHiddenFlag}>
                    <label>{this.state.steps}</label><br />
                    <div>
                        <form>
                            <input type={this.state.inputType} placeholder={this.state.journeyDetails.inputPlaceHolder} name={this.state.journeyDetails.inputPlaceHolder} onChange={this.evaluateInput} onBlur={this.validateDetails} value={this.state.currentValue} hidden={this.state.inputTextHiddenFlag} ref={this.state.textInput} /><br />
                            <label className="errorMsg" >{this.state.errorMsg}</label><br />
                            <div hidden={!this.state.inputTextHiddenFlag}>
                                <h3><label>Source: {this.state.formData.source}</label></h3><br />
                                <h3><label>Destination: {this.state.formData.destination}</label></h3><br />
                                <h3><label>Journey: {this.state.formData.date}</label></h3><br />
                            </div>
                            <button className="btn btn-primary backButtonPlacer" disabled={this.state.backButtonDisabled} onClick={this.getBackData}>Back</button>
                            <button className="btn btn-primary nextButtonPlacer" disabled={this.state.nextButtonDisabled} onClick={this.getNextData}>Next</button>
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
                <Router>
                    <div>
                        <Link to='/journeyhistory'>Journey History</Link>
                        <Switch>
                            <Route path="/journeyHistory">
                                <JourneyHistory />
                            </Route>
                        </Switch>
                    </div>

                </Router>
                <Footer />
            </div>
        )
    }
}

export default Dashboard;